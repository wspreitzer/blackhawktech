import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Customer } from '../../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get<Customer[]>(`${API_URL}/admin/customers`);
  }

  deleteCustomer(username: string) {
    return this.http.delete(`${API_URL}/users/${username}`);
  }

  getCustomerByUsername(username: string) {
    return this.http.get<Customer>(`${API_URL}/users/${username}`);
  }

  updateCustomer(username: string, customer: Customer) {
    return this.http.put(`${API_URL}/users/${username}/customers/`, customer);
  }

  createCustomer(username: string | null, customer: Customer) {
    return this.http.post(`${API_URL}/user/${username}/customers`,customer);
  }
}
