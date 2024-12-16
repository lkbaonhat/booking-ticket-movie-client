import { BaseService } from "./BaseService";

export class ManageFilmService extends BaseService {
  constructor() {
    super();
  }

  getListBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
}

export const manageFilmService = new ManageFilmService();
