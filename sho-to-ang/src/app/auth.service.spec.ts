import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;//Об'єкт сервісу AuthService
  let httpMock: HttpTestingController;//об'єкт контролера для перевірки запитів http

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], //Імпортування HttpClientTestingModule для тестування http запитів
      providers:[AuthService]//Постачальник сервісу AuthService
    });
    service = TestBed.inject(AuthService);//Витягання екземпляру з контейнера TestBed
    httpMock=TestBed.inject(HttpTestingController);//Витягання екземпляру HttpTestingController для перевірки запитів http
  });
   
  afterEach(()=>{
    httpMock.verify();//Після кожного тесту перевірка, чи всі запити http були обробленя
  });

  it('should be created', () => {
    expect(service).toBeTruthy();//Перевірка, що сервіс успішно створено
  });

it('should authenticste user with correct credentials', ()=>{
  const dummyResponse = {autheticated: true};//Макетна відводіть від сервера
  const username = 'testUser';
  const password ='testPassword';

  service.login(username, password);//Викликання методу для входу користувача з тестовими даними

  const req = httpMock.expectOne('http://example.com/login');//Очікування одного запиту http до вказаної url
  expect(req.request.method).toBe('POST');//Перевірка методу запиту
  expect(req.request.body).toEqual({username, password}); //Перевірка тіла запиту

  req.flush(dummyResponse);//Повертання макетної відповіді від сервера

  expect(service.isAuthenticatedUser()).toBe(true);//Перевірка, що користувач успішно аутентифікований
});

it('should not authenticate user with incorrect credentials', ()=>{
  const dummyResponse = {autheticated: false};//Макетна відводіть від сервера
  const username = 'testUser';
  const password ='testPassword';

  service.login(username, password);//Викликання методу для входу користувача з тестовими даними

  const req = httpMock.expectOne('http://example.com/login');//Очікування одного запиту http до вказаної url
  expect(req.request.method).toBe('POST');//Перевірка методу запиту
  expect(req.request.body).toEqual({username, password}); //Перевірка тіла запиту

  req.flush(dummyResponse);//Повертання макетної відповіді від сервера

  expect(service.isAuthenticatedUser()).toBe(false);//Перевірка, що користувач не аутентифікований
});

it('should logout user', ()=>{
  service.logout();//Викликання методу для виходу користувача
  expect(service.isAuthenticatedUser()).toBe(false);//Перевірка, що користувач вийшов і не аутентифікований
})

});