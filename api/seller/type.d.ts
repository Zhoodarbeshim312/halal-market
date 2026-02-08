// Запрос на создание продавца
interface SellerCreateRequest {
  phone: string;
}

// Ответ от сервера при создании продавца
interface SellerCreateResponse {
  id: number;
  phone_number: string;
  status: string;
  created_at: string;
}

// Запрос на проверку кода
interface SellerVerifyRequest {
  id: number;
  code: string;
}

// Ответ от сервера при проверке кода
interface SellerVerifyResponse {
  id: number;
  phone_number: string;
  status: string;
  verified_at: string;
}
