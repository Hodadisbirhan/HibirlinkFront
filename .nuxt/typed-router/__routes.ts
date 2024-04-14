// @ts-nocheck
// eslint-disable
// ---------------------------------------------------
// 🚗🚦 Generated by nuxt-typed-router. Do not modify !
// ---------------------------------------------------

/**
 * Exhaustive list of all the available route names in the app
 * */
export type RoutesNamesList =
  | 'slug'
  | 'about'
  | 'account-cart'
  | 'account-chat-index-id'
  | 'account-checkout-and-pay'
  | 'account'
  | 'account-orders'
  | 'account-orders-self'
  | 'account-saved'
  | 'account-saved-realtime-service'
  | 'account-saved-virtual-service'
  | 'auction'
  | 'auth-forgetPassword'
  | 'auth-redirect'
  | 'auth-rul'
  | 'auth-setUpAccount'
  | 'auth-signIn'
  | 'auth-signUp'
  | 'chats'
  | 'delivery'
  | 'index'
  | 'products-category-name-id'
  | 'products-category-name-id-new-release'
  | 'products-category-name-id-special-discount'
  | 'products-category-name-id-sub-category-sub_name-sub_id'
  | 'products-index'
  | 'products-index-new-release-realtime'
  | 'products-index-new-release-virtual'
  | 'products-index-search-realtime'
  | 'products-index-search-virtual'
  | 'products-index-special-discount-realtime'
  | 'products-index-virtual'
  | 'products-realtime-detail-id'
  | 'products-virtual-category-name-id'
  | 'products-virtual-detail-id'
  | 'register'
  | 'services-category-name-id'
  | 'services-index'
  | 'services-index-virtual'
  | 'services-new-release-realtime'
  | 'services-realtime-detail-id'
  | 'services-search-realtime'
  | 'services-search-virtual'
  | 'services-top-rated-realtime'
  | 'services-virtual-category-name-id'
  | 'services-virtual-detail-id'
  | 'store-employee-account'
  | 'store-employee-add-product-storeId'
  | 'store-employee-chats'
  | 'store-employee-discount'
  | 'store-employee-edit-product-productId'
  | 'store-employee'
  | 'store-employee-order-page-index-delivery-storeId'
  | 'store-employee-order-page-index-self-storeId'
  | 'store-employee-products-storeId'
  | 'store-employee-store';

/**
 * Routes params are only required for the exact targeted route name,
 * vue-router behaviour allow to navigate between children routes without the need to provide all the params every time.
 * So we can't enforce params when navigating between routes, only a `[xxx].vue` page will have required params in the type definition
 *
 * */
export type RoutesParamsRecord = {
  slug: {
    slug: (string | number)[];
  };
  about: never;
  'account-cart': never;
  'account-chat-index-id': {
    id: string | number;
  };
  'account-checkout-and-pay': never;
  account: never;
  'account-orders': never;
  'account-orders-self': never;
  'account-saved': never;
  'account-saved-realtime-service': never;
  'account-saved-virtual-service': never;
  auction: never;
  'auth-forgetPassword': never;
  'auth-redirect': never;
  'auth-rul': never;
  'auth-setUpAccount': never;
  'auth-signIn': never;
  'auth-signUp': never;
  chats: never;
  delivery: never;
  index: never;
  'products-category-name-id': {
    name?: string | number;
    id: string | number;
  };
  'products-category-name-id-new-release': {
    name?: string | number;
    id?: string | number;
  };
  'products-category-name-id-special-discount': {
    name?: string | number;
    id?: string | number;
  };
  'products-category-name-id-sub-category-sub_name-sub_id': {
    name?: string | number;
    id?: string | number;
    sub_name: string | number;
    sub_id: string | number;
  };
  'products-index': never;
  'products-index-new-release-realtime': never;
  'products-index-new-release-virtual': never;
  'products-index-search-realtime': never;
  'products-index-search-virtual': never;
  'products-index-special-discount-realtime': never;
  'products-index-virtual': never;
  'products-realtime-detail-id': {
    id: string | number;
  };
  'products-virtual-category-name-id': {
    name: string | number;
    id: string | number;
  };
  'products-virtual-detail-id': {
    id: string | number;
  };
  register: never;
  'services-category-name-id': {
    name: string | number;
    id: string | number;
  };
  'services-index': never;
  'services-index-virtual': never;
  'services-new-release-realtime': never;
  'services-realtime-detail-id': {
    id: string | number;
  };
  'services-search-realtime': never;
  'services-search-virtual': never;
  'services-top-rated-realtime': never;
  'services-virtual-category-name-id': {
    name: string | number;
    id: string | number;
  };
  'services-virtual-detail-id': {
    id: string | number;
  };
  'store-employee-account': never;
  'store-employee-add-product-storeId': {
    storeId: string | number;
  };
  'store-employee-chats': never;
  'store-employee-discount': never;
  'store-employee-edit-product-productId': {
    productId: string | number;
  };
  'store-employee': never;
  'store-employee-order-page-index-delivery-storeId': {
    storeId: string | number;
  };
  'store-employee-order-page-index-self-storeId': {
    storeId: string | number;
  };
  'store-employee-products-storeId': {
    storeId: string | number;
  };
  'store-employee-store': never;
};

/**
 * Record resolved used for resolved routes
 *
 * */
export type RoutesParamsRecordResolved = {
  slug: {
    slug: string[];
  };
  about: never;
  'account-cart': never;
  'account-chat-index-id': {
    id: string;
  };
  'account-checkout-and-pay': never;
  account: never;
  'account-orders': never;
  'account-orders-self': never;
  'account-saved': never;
  'account-saved-realtime-service': never;
  'account-saved-virtual-service': never;
  auction: never;
  'auth-forgetPassword': never;
  'auth-redirect': never;
  'auth-rul': never;
  'auth-setUpAccount': never;
  'auth-signIn': never;
  'auth-signUp': never;
  chats: never;
  delivery: never;
  index: never;
  'products-category-name-id': {
    name: string;
    id: string;
  };
  'products-category-name-id-new-release': {
    name: string;
    id: string;
  };
  'products-category-name-id-special-discount': {
    name: string;
    id: string;
  };
  'products-category-name-id-sub-category-sub_name-sub_id': {
    name: string;
    id: string;
    sub_name: string;
    sub_id: string;
  };
  'products-index': never;
  'products-index-new-release-realtime': never;
  'products-index-new-release-virtual': never;
  'products-index-search-realtime': never;
  'products-index-search-virtual': never;
  'products-index-special-discount-realtime': never;
  'products-index-virtual': never;
  'products-realtime-detail-id': {
    id: string;
  };
  'products-virtual-category-name-id': {
    name: string;
    id: string;
  };
  'products-virtual-detail-id': {
    id: string;
  };
  register: never;
  'services-category-name-id': {
    name: string;
    id: string;
  };
  'services-index': never;
  'services-index-virtual': never;
  'services-new-release-realtime': never;
  'services-realtime-detail-id': {
    id: string;
  };
  'services-search-realtime': never;
  'services-search-virtual': never;
  'services-top-rated-realtime': never;
  'services-virtual-category-name-id': {
    name: string;
    id: string;
  };
  'services-virtual-detail-id': {
    id: string;
  };
  'store-employee-account': never;
  'store-employee-add-product-storeId': {
    storeId: string;
  };
  'store-employee-chats': never;
  'store-employee-discount': never;
  'store-employee-edit-product-productId': {
    productId: string;
  };
  'store-employee': never;
  'store-employee-order-page-index-delivery-storeId': {
    storeId: string;
  };
  'store-employee-order-page-index-self-storeId': {
    storeId: string;
  };
  'store-employee-products-storeId': {
    storeId: string;
  };
  'store-employee-store': never;
};

/**
 * Discriminated union that will allow to infer params based on route name
 * It's used for programmatic navigation like router.push or <NuxtLink/>
 * */
export type RoutesNamedLocations =
  | {
      name: 'slug';
      params: {
        slug: (string | number)[];
      };
    }
  | { name: 'about' }
  | { name: 'account-cart' }
  | {
      name: 'account-chat-index-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'account-checkout-and-pay' }
  | { name: 'account' }
  | { name: 'account-orders' }
  | { name: 'account-orders-self' }
  | { name: 'account-saved' }
  | { name: 'account-saved-realtime-service' }
  | { name: 'account-saved-virtual-service' }
  | { name: 'auction' }
  | { name: 'auth-forgetPassword' }
  | { name: 'auth-redirect' }
  | { name: 'auth-rul' }
  | { name: 'auth-setUpAccount' }
  | { name: 'auth-signIn' }
  | { name: 'auth-signUp' }
  | { name: 'chats' }
  | { name: 'delivery' }
  | { name: 'index' }
  | {
      name: 'products-category-name-id';
      params: {
        name?: string | number;
        id: string | number;
      };
    }
  | {
      name: 'products-category-name-id-new-release';
      params?: {
        name?: string | number;
        id?: string | number;
      };
    }
  | {
      name: 'products-category-name-id-special-discount';
      params?: {
        name?: string | number;
        id?: string | number;
      };
    }
  | {
      name: 'products-category-name-id-sub-category-sub_name-sub_id';
      params: {
        name?: string | number;
        id?: string | number;
        sub_name: string | number;
        sub_id: string | number;
      };
    }
  | { name: 'products-index' }
  | { name: 'products-index-new-release-realtime' }
  | { name: 'products-index-new-release-virtual' }
  | { name: 'products-index-search-realtime' }
  | { name: 'products-index-search-virtual' }
  | { name: 'products-index-special-discount-realtime' }
  | { name: 'products-index-virtual' }
  | {
      name: 'products-realtime-detail-id';
      params: {
        id: string | number;
      };
    }
  | {
      name: 'products-virtual-category-name-id';
      params: {
        name: string | number;
        id: string | number;
      };
    }
  | {
      name: 'products-virtual-detail-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'register' }
  | {
      name: 'services-category-name-id';
      params: {
        name: string | number;
        id: string | number;
      };
    }
  | { name: 'services-index' }
  | { name: 'services-index-virtual' }
  | { name: 'services-new-release-realtime' }
  | {
      name: 'services-realtime-detail-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'services-search-realtime' }
  | { name: 'services-search-virtual' }
  | { name: 'services-top-rated-realtime' }
  | {
      name: 'services-virtual-category-name-id';
      params: {
        name: string | number;
        id: string | number;
      };
    }
  | {
      name: 'services-virtual-detail-id';
      params: {
        id: string | number;
      };
    }
  | { name: 'store-employee-account' }
  | {
      name: 'store-employee-add-product-storeId';
      params: {
        storeId: string | number;
      };
    }
  | { name: 'store-employee-chats' }
  | { name: 'store-employee-discount' }
  | {
      name: 'store-employee-edit-product-productId';
      params: {
        productId: string | number;
      };
    }
  | { name: 'store-employee' }
  | {
      name: 'store-employee-order-page-index-delivery-storeId';
      params: {
        storeId: string | number;
      };
    }
  | {
      name: 'store-employee-order-page-index-self-storeId';
      params: {
        storeId: string | number;
      };
    }
  | {
      name: 'store-employee-products-storeId';
      params: {
        storeId: string | number;
      };
    }
  | { name: 'store-employee-store' };

/**
 * Type returned by a resolved Route that will allow to type guard the route name.
 * By default the params are unknown
 * */
export type RoutesNamedLocationsResolved = {
  name: RoutesNamesList;
  params: unknown;
} & (
  | {
      name: 'slug';
      params: {
        slug: string[];
      };
    }
  | { name: 'about' }
  | { name: 'account-cart' }
  | {
      name: 'account-chat-index-id';
      params: {
        id: string;
      };
    }
  | { name: 'account-checkout-and-pay' }
  | { name: 'account' }
  | { name: 'account-orders' }
  | { name: 'account-orders-self' }
  | { name: 'account-saved' }
  | { name: 'account-saved-realtime-service' }
  | { name: 'account-saved-virtual-service' }
  | { name: 'auction' }
  | { name: 'auth-forgetPassword' }
  | { name: 'auth-redirect' }
  | { name: 'auth-rul' }
  | { name: 'auth-setUpAccount' }
  | { name: 'auth-signIn' }
  | { name: 'auth-signUp' }
  | { name: 'chats' }
  | { name: 'delivery' }
  | { name: 'index' }
  | {
      name: 'products-category-name-id';
      params: {
        name: string;
        id: string;
      };
    }
  | {
      name: 'products-category-name-id-new-release';
      params: {
        name: string;
        id: string;
      };
    }
  | {
      name: 'products-category-name-id-special-discount';
      params: {
        name: string;
        id: string;
      };
    }
  | {
      name: 'products-category-name-id-sub-category-sub_name-sub_id';
      params: {
        name: string;
        id: string;
        sub_name: string;
        sub_id: string;
      };
    }
  | { name: 'products-index' }
  | { name: 'products-index-new-release-realtime' }
  | { name: 'products-index-new-release-virtual' }
  | { name: 'products-index-search-realtime' }
  | { name: 'products-index-search-virtual' }
  | { name: 'products-index-special-discount-realtime' }
  | { name: 'products-index-virtual' }
  | {
      name: 'products-realtime-detail-id';
      params: {
        id: string;
      };
    }
  | {
      name: 'products-virtual-category-name-id';
      params: {
        name: string;
        id: string;
      };
    }
  | {
      name: 'products-virtual-detail-id';
      params: {
        id: string;
      };
    }
  | { name: 'register' }
  | {
      name: 'services-category-name-id';
      params: {
        name: string;
        id: string;
      };
    }
  | { name: 'services-index' }
  | { name: 'services-index-virtual' }
  | { name: 'services-new-release-realtime' }
  | {
      name: 'services-realtime-detail-id';
      params: {
        id: string;
      };
    }
  | { name: 'services-search-realtime' }
  | { name: 'services-search-virtual' }
  | { name: 'services-top-rated-realtime' }
  | {
      name: 'services-virtual-category-name-id';
      params: {
        name: string;
        id: string;
      };
    }
  | {
      name: 'services-virtual-detail-id';
      params: {
        id: string;
      };
    }
  | { name: 'store-employee-account' }
  | {
      name: 'store-employee-add-product-storeId';
      params: {
        storeId: string;
      };
    }
  | { name: 'store-employee-chats' }
  | { name: 'store-employee-discount' }
  | {
      name: 'store-employee-edit-product-productId';
      params: {
        productId: string;
      };
    }
  | { name: 'store-employee' }
  | {
      name: 'store-employee-order-page-index-delivery-storeId';
      params: {
        storeId: string;
      };
    }
  | {
      name: 'store-employee-order-page-index-self-storeId';
      params: {
        storeId: string;
      };
    }
  | {
      name: 'store-employee-products-storeId';
      params: {
        storeId: string;
      };
    }
  | { name: 'store-employee-store' }
);

export type RoutesNamesListRecord = {
  slug: 'slug';
  about: 'about';
  accountCart: 'account-cart';
  accountChat: { chatIndexId: 'account-chat-index-id' };
  accountCheckoutAndPay: 'account-checkout-and-pay';
  account: 'account';
  accountOrders: { index: 'account-orders'; ordersSelf: 'account-orders-self' };
  accountSaved: {
    index: 'account-saved';
    savedRealtimeService: 'account-saved-realtime-service';
    savedVirtualService: 'account-saved-virtual-service';
  };
  auction: 'auction';
  authForgetPassword: 'auth-forgetPassword';
  authRedirect: 'auth-redirect';
  authRul: 'auth-rul';
  authSetUpAccount: 'auth-setUpAccount';
  authSignIn: 'auth-signIn';
  authSignUp: 'auth-signUp';
  chats: { index: 'chats' };
  delivery: 'delivery';
  index: 'index';
  productsCategoryNameId: {
    index: 'products-category-name-id';
    categoryNameIdNewRelease: 'products-category-name-id-new-release';
    categoryNameIdSpecialDiscount: 'products-category-name-id-special-discount';
    categoryNameIdSubCategorySubNameSubId: 'products-category-name-id-sub-category-sub_name-sub_id';
  };
  products: {
    index: 'products-index';
    indexNewReleaseRealtime: 'products-index-new-release-realtime';
    indexNewReleaseVirtual: 'products-index-new-release-virtual';
    indexSearchRealtime: 'products-index-search-realtime';
    indexSearchVirtual: 'products-index-search-virtual';
    indexSpecialDiscountRealtime: 'products-index-special-discount-realtime';
    indexVirtual: 'products-index-virtual';
  };
  productsRealtimeDetailId: 'products-realtime-detail-id';
  productsVirtualCategoryNameId: 'products-virtual-category-name-id';
  productsVirtualDetailId: 'products-virtual-detail-id';
  register: 'register';
  servicesCategoryNameId: 'services-category-name-id';
  services: { index: 'services-index'; indexVirtual: 'services-index-virtual' };
  servicesNewReleaseRealtime: 'services-new-release-realtime';
  servicesRealtimeDetailId: 'services-realtime-detail-id';
  servicesSearchRealtime: 'services-search-realtime';
  servicesSearchVirtual: 'services-search-virtual';
  servicesTopRatedRealtime: 'services-top-rated-realtime';
  servicesVirtualCategoryNameId: 'services-virtual-category-name-id';
  servicesVirtualDetailId: 'services-virtual-detail-id';
  storeEmployeeAccount: 'store-employee-account';
  storeEmployeeAddProductStoreId: 'store-employee-add-product-storeId';
  storeEmployeeChats: { index: 'store-employee-chats' };
  storeEmployeeDiscount: 'store-employee-discount';
  storeEmployeeEditProductProductId: 'store-employee-edit-product-productId';
  storeEmployee: 'store-employee';
  storeEmployeeOrderPage: {
    employeeOrderPageIndexDeliveryStoreId: 'store-employee-order-page-index-delivery-storeId';
    employeeOrderPageIndexSelfStoreId: 'store-employee-order-page-index-self-storeId';
  };
  storeEmployeeProductsStoreId: 'store-employee-products-storeId';
  storeEmployeeStore: 'store-employee-store';
};

export const routesNames = {
  slug: 'slug' as const,
  about: 'about' as const,
  accountCart: 'account-cart' as const,
  accountChat: { chatIndexId: 'account-chat-index-id' as const },
  accountCheckoutAndPay: 'account-checkout-and-pay' as const,
  account: 'account' as const,
  accountOrders: { index: 'account-orders' as const, ordersSelf: 'account-orders-self' as const },
  accountSaved: {
    index: 'account-saved' as const,
    savedRealtimeService: 'account-saved-realtime-service' as const,
    savedVirtualService: 'account-saved-virtual-service' as const,
  },
  auction: 'auction' as const,
  authForgetPassword: 'auth-forgetPassword' as const,
  authRedirect: 'auth-redirect' as const,
  authRul: 'auth-rul' as const,
  authSetUpAccount: 'auth-setUpAccount' as const,
  authSignIn: 'auth-signIn' as const,
  authSignUp: 'auth-signUp' as const,
  chats: { index: 'chats' as const },
  delivery: 'delivery' as const,
  index: 'index' as const,
  productsCategoryNameId: {
    index: 'products-category-name-id' as const,
    categoryNameIdNewRelease: 'products-category-name-id-new-release' as const,
    categoryNameIdSpecialDiscount: 'products-category-name-id-special-discount' as const,
    categoryNameIdSubCategorySubNameSubId:
      'products-category-name-id-sub-category-sub_name-sub_id' as const,
  },
  products: {
    index: 'products-index' as const,
    indexNewReleaseRealtime: 'products-index-new-release-realtime' as const,
    indexNewReleaseVirtual: 'products-index-new-release-virtual' as const,
    indexSearchRealtime: 'products-index-search-realtime' as const,
    indexSearchVirtual: 'products-index-search-virtual' as const,
    indexSpecialDiscountRealtime: 'products-index-special-discount-realtime' as const,
    indexVirtual: 'products-index-virtual' as const,
  },
  productsRealtimeDetailId: 'products-realtime-detail-id' as const,
  productsVirtualCategoryNameId: 'products-virtual-category-name-id' as const,
  productsVirtualDetailId: 'products-virtual-detail-id' as const,
  register: 'register' as const,
  servicesCategoryNameId: 'services-category-name-id' as const,
  services: { index: 'services-index' as const, indexVirtual: 'services-index-virtual' as const },
  servicesNewReleaseRealtime: 'services-new-release-realtime' as const,
  servicesRealtimeDetailId: 'services-realtime-detail-id' as const,
  servicesSearchRealtime: 'services-search-realtime' as const,
  servicesSearchVirtual: 'services-search-virtual' as const,
  servicesTopRatedRealtime: 'services-top-rated-realtime' as const,
  servicesVirtualCategoryNameId: 'services-virtual-category-name-id' as const,
  servicesVirtualDetailId: 'services-virtual-detail-id' as const,
  storeEmployeeAccount: 'store-employee-account' as const,
  storeEmployeeAddProductStoreId: 'store-employee-add-product-storeId' as const,
  storeEmployeeChats: { index: 'store-employee-chats' as const },
  storeEmployeeDiscount: 'store-employee-discount' as const,
  storeEmployeeEditProductProductId: 'store-employee-edit-product-productId' as const,
  storeEmployee: 'store-employee' as const,
  storeEmployeeOrderPage: {
    employeeOrderPageIndexDeliveryStoreId:
      'store-employee-order-page-index-delivery-storeId' as const,
    employeeOrderPageIndexSelfStoreId: 'store-employee-order-page-index-self-storeId' as const,
  },
  storeEmployeeProductsStoreId: 'store-employee-products-storeId' as const,
  storeEmployeeStore: 'store-employee-store' as const,
};