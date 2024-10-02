export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
  }
  
export interface ICategory {
    id: number;
    name: string;
}

export interface IPropsCards {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
}

export interface IRegisterProps {
    name: string;
    // lastName: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    // country: string;
}

export interface IRegisterErrorsProps {
    name?: string;
    // lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    password?: string;
    // country?: string;
}

export interface ILoginProps {
    email: string;
    password: string;
}

export interface IErrorLoginProps {
    email?: string;
    password?: string;
}

export interface IOrderCarWishProps {
    product: any;
}

export interface IUserSession {
    token: string;
    user: {
        id: number;
        address: string;
        email: string;
        name: string;
        phone: string;
        role: string;
        orders: [];
    }
};

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[];
};

export interface ILabelComponentProps {
    product?: IProduct;
    units: number;
    viewType: 'carShop' | 'ordersView' | 'wishListView';
    orderStatus?: { status: string; date: string };
};

export interface IOrderCarWishProps {
    order?: IOrder;
    products?: IProduct[];
    viewType: 'carShop' | 'ordersView' | 'wishListView';
};

export interface IListCardProps {
    title?: string;
    linkUrl?: string;
    filterId?: number;
    customStyle?: {};
    disableLink?: boolean;
    products: IProduct[];
  }