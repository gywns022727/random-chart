import axios from "axios";

interface GetUsersResults {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface GetUsersInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface GetUsersResponse {
  results: GetUsersResults[];
  info: GetUsersInfo;
}

export default async function getUsers(
  results?: number
): Promise<GetUsersResponse | false> {
  try {
    const { data } = await axios.get<GetUsersResponse>(
      `https://randomuser.me/api/?results=${results || 100}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
