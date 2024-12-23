import { BaseService } from "./BaseService";
import { GROUPID } from "@utils/config";

export class ManageFilmService extends BaseService {
  constructor() {
    super();
  }

  getListBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  getListFilm = (tenPhim = "") => {
    if (tenPhim.trim() != "") {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
}

export const manageFilmService = new ManageFilmService();
