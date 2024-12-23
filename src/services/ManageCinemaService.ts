import { BaseService } from "./BaseService";
import { GROUPID } from "@utils/config";

export class ManageCinemaService extends BaseService {
  constructor() {
    super();
  }

  getListCinemaSystem = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };
}

export const manageCinemaService = new ManageCinemaService();
