/** Media path tập trung — path tương đối trong public/, không hardcode domain */

export const siteAssets = {
  brand: {
    logo: '/images/brand/tan-pham-gia-logo.png',
    ministryCert: '/images/brand/logo-bo-cong-thuong.webp',
  },
  hero: {
    video: '/videos/header-dong-phuc.mp4',
    fallback: '/images/hero/fallback.jpg',
    gioiThieu: '/images/about/banner1.jpg',
    giaiPhap: '/images/hero/giai-phap.jpg',
    khachHang: '/images/hero/khach-hang.jpg',
    tinTuc: '/images/hero/tin-tuc.webp',
    taiLieu: '/images/hero/tai-lieu.webp',
    lienHe: '/images/hero/lien-he.webp',
  },
  cta: {
    background: '/images/cta/background.webp',
  },
  documents: {
    catalogYTe: '/images/documents/catalog-y-te.webp',
    catalogTheThao: '/images/documents/catalog-the-thao.webp',
    catalogTeaser: '/images/documents/catalog-teaser.webp',
  },
  certificates: {
    iso9001: '/images/certificates/iso-9001.webp',
    hangVietNam: '/images/certificates/hang-viet-nam.webp',
    giayKhen: '/images/certificates/giay-khen.webp',
    unido: '/images/certificates/unido.webp',
    bangKhen3: '/images/certificates/bang-khen-3.webp',
    cupGiaiThuong: '/images/certificates/cup-giai-thuong.webp',
  },
  solutions: {
    giaiPhap1: '/images/solutions/giai-phap-1.webp',
    giaiPhap2: '/images/solutions/giai-phap-2.webp',
    giaiPhap3: '/images/solutions/giai-phap-3.webp',
    giaiPhap4: '/images/solutions/giai-phap-4.webp',
  },
  blog: {
    chonVaiPolo: '/images/blog/chon-vai-polo-khi-hau-viet-nam.jpg',
    dongPhucToiGian: '/images/blog/dong-phuc-toi-gian-branding-2024.jpg',
    sanXuat10000: '/images/blog/san-xuat-10000-ao-thun-7-ngay.jpg',
    medicalUniform: '/images/blog/medical-uniform-2025.webp',
  },
  cases: {
    bidv: '/images/cases/bidv.jpg',
    bidvClient: '/images/cases/bidv-client.jpg',
    bidvGp2: '/images/cases/bidv-gp2.jpg',
    vfm: '/images/logos/VFM (1).png',
    cocaColaGp2: '/images/cases/coca-cola-gp2.jpg',
    saviscoGp2: '/images/cases/savisco-gp2.webp',
    bvRangHamMatGp4: '/images/cases/bv-rang-ham-mat-gp4.webp',
    bvRangHamMat: '/images/cases/bv-rang-ham-mat-sai-gon.webp',
    cocaCola: '/images/cases/coca-cola-philippines.jpg',
    kingGroup: '/images/cases/king-group.webp',
    datGroup: '/images/cases/dat-group.webp',
    zeroWaste: '/images/cases/zero-waste.webp',
    vivant: '/images/cases/vivant.webp',
    saviscoGp3: '/images/cases/savisco-gp3.webp',
    discovery: '/images/cases/discovery.jpg',
    engadine: '/images/cases/engadine-clinic.webp',
    betrimex: '/images/cases/betrimex.webp',
  },
  about: {
    brandStory: '/images/why-choose/nang-luc-san-xuat.png',
    production1: '/images/about/production-1.jpg',
    production2: '/images/about/qc-5-tang.png',
    heThongSanXuat: '/images/about/he-thong-san-xuat.png',
    sanPhamMoiThang: '/images/about/san-pham-moi-thang.png',
    dongHanhTuVanBanGiao: '/images/about/dong-hanh-tu-van-ban-giao.png',
    sanPhamDaSanXuat: '/images/about/san-pham-da-san-xuat.png',
  },
  whyChoose: {
    kinhNghiem: '/images/why-choose/kinh-nghiem.png',
    thoiTrangHoa: '/images/why-choose/thoi-trang-hoa.jpg',
    nangLucSanXuat: '/images/why-choose/nang-luc-san-xuat.png',
    /** Ảnh thẻ QC — nhà thiết kế thời trang */
    qc: '/images/why-choose/qc.webp',
  },
} as const;

/** Bìa catalogue trang chủ */
export const homeCatalogCovers = [
  {
    src: siteAssets.documents.catalogYTe,
    alt: 'Catalogue đồng phục y tế Tân Phạm Gia',
    class: 'left-[4%] top-[10%] w-[58%] -rotate-6 shadow-[0_18px_40px_-20px_rgba(16,44,77,0.45)]',
  },
  {
    src: siteAssets.documents.catalogTheThao,
    alt: 'Catalogue đồng phục thể thao Tân Phạm Gia',
    class: 'left-[22%] top-[6%] w-[58%] rotate-2 shadow-[0_22px_48px_-18px_rgba(16,44,77,0.5)]',
  },
  {
    src: siteAssets.documents.catalogTeaser,
    alt: 'Catalogue polo doanh nghiệp Tân Phạm Gia',
    class: 'left-[38%] top-[2%] w-[58%] rotate-[9deg] shadow-[0_28px_56px_-16px_rgba(16,44,77,0.55)] z-10',
  },
] as const;
