import { useFormErrors } from '@/composables/useFormErrors'
import { useNotification } from '@/composables/useNotification'
import router from '@/router'
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type RawAxiosRequestHeaders
} from 'axios'

class Request {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    const formErrors = useFormErrors();

    const headers: RawAxiosRequestHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Client-Version': '1.0.0'
    }
    this.axiosInstance = axios.create({
      baseURL,
      headers: headers
    })
    this.axiosInstance.interceptors.response.use(
  (response) => {
    formErrors.clearErrors();
    return response;
  },
  async (error) => {
    const { default: router } = await import('@/router');
    const currentRoute = router.currentRoute.value;
    const { response } = error;
    let message = '';
    const notification = useNotification();

    if (response && response.data === 'blocked') {
      router.push({ name: 'blocked' });
      return Promise.reject({ type: 'blocked', message: 'حساب شما مسدود شده. لطفا با پشتیبانی تماس حاصل فرمایید' });
    }

    if (!response) {
      message = 'خطای دسترسی به اینترنت.';
      if (currentRoute.name !== 'connection-error') {
        sessionStorage.setItem('previous_route', currentRoute.fullPath);
        router.push({ name: 'connection-error' });
      }
      notification.addNotification('خطا', message, 'error');
      return Promise.reject({ type: 'network', message });
    } else {
      switch (response.status) {
        case 422:
          formErrors.setErrors(response.data.errors);
          return Promise.reject({
            type: 'validation',
            errors: response.data.errors
          });
        case 401:
          message = 'دسترسی غیرمجاز.';
          localStorage.removeItem('token');
          router.push({ name: 'login' });
          notification.addNotification('خطا', message, 'error');
          break;
        case 429:
          message = 'محدودیت در تعداد دفعات درخواست.';
          break;
        case 404:
          message = 'آدرس مورد نظر اشتباست.';
          break;
        case 500:
          message = 'خطای سرور.';
          break;
        case 503:
          if (error.response.data.message === 'Service Unavailable') {
            if (currentRoute.name !== 'maintenance-mode') {
              message = 'سایت در حال بروزرسانی است.';
              sessionStorage.setItem('previous_route', currentRoute.fullPath);
              router.push({ name: 'maintenance-mode' });
            }
          } else {
            message = 'دسترسی غیرمجاز.';
          }
          break;
        default:
          console.error(`Error: ${response.status}`);
      }
    }
    if (message.length) {
      notification.addNotification('خطا', message, 'error');
    }

    return Promise.reject(error);
  }
);
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, {
      ...config,
      params: config?.params
    })
  }

  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config)
  }

  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config)
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config)
  }
}

const apiClient = new Request(`${import.meta.env.VITE_API_BASE_URL}`)

export default apiClient
