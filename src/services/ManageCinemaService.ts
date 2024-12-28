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

  getInfoFilmSchedule = (filmCode: any) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${filmCode}`
    );
  };
}

export const manageCinemaService = new ManageCinemaService();
