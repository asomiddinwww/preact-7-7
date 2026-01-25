export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}
export interface HeroMoctTyoe {
  id: number;
  title: string;
  subTittle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}
export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: string;
  _id: string;
}

export interface QueryType<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export interface DiscountFlowerType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}

export interface ProductType {
  category: string;
  comments: [];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: number;
  main_image: string;
  price: number;
  count: number | undefined;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  userPrice?: number;
  _id: string;
}
