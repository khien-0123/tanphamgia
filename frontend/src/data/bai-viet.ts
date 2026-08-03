/**
 * Nội dung thân bài — case study và blog.
 *
 * Vì sao tách khỏi component: PostEditorialLayout chỉ lo trình bày, nội dung
 * nằm ở đây. Khi nối WordPress, `content.rendered` thay thế đúng object này,
 * component không phải sửa.
 *
 * Nguồn dữ liệu case study: giai-phap-1..4-du-an.ts (dữ liệu khách gửi).
 * Phần văn xuôi nối giữa các mục chỉ diễn giải lại thông tin đã có — KHÔNG
 * thêm số liệu, mốc thời gian hay phát ngôn nào không có trong nguồn.
 */

import { siteAssets } from './assets';

export type PostBlock =
  | { type: 'lead' | 'p' | 'h2' | 'h3'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'figure'; src: string; alt: string; caption: string; ratio?: 'wide' | 'square' }
  | { type: 'table'; caption?: string; head: string[]; rows: string[][] };

/* ═══════════════════════════════════════════════════════════════
   CASE STUDY — 12 dự án thật, lấy từ giai-phap-1..4-du-an.ts
   ═══════════════════════════════════════════════════════════════ */

const caseStudyBodies: Record<string, PostBlock[]> = {
  /* ─── Giải pháp 1 · Sản xuất & FDI ─── */

  'dat-group': [
    {
      type: 'lead',
      text: 'DAT Group sở hữu đội ngũ nhân sự đa dạng từ khối văn phòng đến kỹ sư hiện trường. Doanh nghiệp cần một giải pháp đồng phục vừa đảm bảo hình ảnh chuyên nghiệp khi làm việc với đối tác, vừa đáp ứng tính linh hoạt cho đội ngũ kỹ thuật thường xuyên di chuyển và làm việc ngoài công trình.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'DAT Group vận hành song song hai khối nhân sự có điều kiện làm việc khác nhau hẳn. Khối văn phòng tiếp xúc đối tác và khách hàng thường xuyên, cần hình ảnh chỉn chu. Đội ngũ kỹ thuật thì di chuyển liên tục giữa các công trình, ưu tiên khả năng vận động và độ bền.',
    },
    {
      type: 'p',
      text: 'Vì vậy bài toán không dừng ở việc chọn một loại vải. Nó là bài toán phân nhóm sản phẩm theo vị trí công việc, rồi giữ cho hai nhóm đó vẫn nhìn ra cùng một thương hiệu.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục cần phù hợp cho nhiều vị trí công việc khác nhau.',
        'Đảm bảo hình ảnh chuyên nghiệp khi làm việc với đối tác và khách hàng.',
        'Nâng cao trải nghiệm mặc cho nhân sự khi sử dụng thường xuyên.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.production1,
      alt: 'Chuyền may đồng phục doanh nghiệp tại xưởng Tân Phạm Gia',
      caption:
        'Hai nhóm sản phẩm được lên kế hoạch sản xuất song song để cùng bàn giao trong một đợt.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Thay vì ép một mẫu áo cho toàn bộ nhân sự, chúng tôi tách thành hai dòng sản phẩm riêng, thống nhất với nhau ở màu sắc và vị trí logo.',
    },
    {
      type: 'ol',
      items: [
        'Phát triển riêng 669 áo sơ mi cho khối văn phòng và 417 áo polo cho đội ngũ kỹ thuật.',
        'Điều chỉnh form dáng và chất liệu dựa trên phản hồi thực tế qua nhiều đợt triển khai.',
        'Chuẩn hóa và lưu trữ toàn bộ hồ sơ kỹ thuật: mã vải, màu sắc, logo và bảng size.',
        'Duy trì tiêu chuẩn sản xuất đồng nhất cho các đơn hàng tái đặt trong nhiều năm.',
      ],
    },
    {
      type: 'p',
      text: 'Hồ sơ kỹ thuật là phần quyết định độ bền của mối hợp tác dài hạn. Có hồ sơ thì đợt bổ sung nhân sự năm sau không phải làm lại từ đầu — chỉ cần lấy đúng thông số đã duyệt ra sản xuất.',
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đồng nhất hình ảnh đội ngũ trên toàn hệ thống.',
        'Rút ngắn thời gian xử lý các đợt bổ sung nhân sự.',
        'Đảm bảo tính nhất quán về màu sắc, chất liệu và form dáng qua nhiều năm sử dụng.',
      ],
    },
  ],

  'zero-waste': [
    {
      type: 'lead',
      text: 'Đội ngũ nhân sự của Zero Waste làm việc đồng thời tại văn phòng và nhà máy. Doanh nghiệp cần một mẫu đồng phục đáp ứng được nhiều môi trường làm việc, đồng thời duy trì nhận diện thống nhất giữa các đơn vị trong hệ sinh thái.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Zero Waste không đứng một mình. Hệ sinh thái còn có Kim Phú Long, Phúc Trường Hải, Biển Xanh và Tấn Lộc Tuấn. Mỗi đơn vị có đặc thù riêng, nhưng khi xuất hiện cùng nhau thì phải nhìn ra là một nhóm.',
    },
    {
      type: 'p',
      text: 'Cùng lúc đó, nhân sự lại di chuyển giữa văn phòng và nhà máy trong cùng một ngày làm việc. Mẫu áo phải chịu được cả hai môi trường mà không phải thay đồ giữa buổi.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục cần phù hợp cả môi trường văn phòng và nhà máy.',
        'Duy trì nhận diện thương hiệu thống nhất trong hệ sinh thái nhiều đơn vị.',
        'Đảm bảo chất lượng ổn định qua nhiều đợt sản xuất.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.heThongSanXuat,
      alt: 'Hệ thống sản xuất đồng phục của Tân Phạm Gia',
      caption:
        'Cùng một bộ thông số kỹ thuật được dùng cho toàn bộ các đơn vị trong hệ sinh thái.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Chúng tôi chọn dòng polo làm mẫu số chung — đủ chỉn chu cho văn phòng, đủ thoải mái cho nhà máy — rồi chuẩn hóa phần nhận diện để nhân rộng ra các đơn vị thành viên.',
    },
    {
      type: 'ol',
      items: [
        'Tư vấn dòng polo cân bằng giữa tính chuyên nghiệp và khả năng vận động.',
        'Chuẩn hóa hệ thống màu sắc, logo và thông số kỹ thuật.',
        'Xây dựng hồ sơ sản phẩm phục vụ tái sản xuất và bổ sung nhân sự.',
        'Triển khai đồng thời giải pháp đồng phục cho các doanh nghiệp thành viên trong hệ sinh thái.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đồng nhất hình ảnh thương hiệu giữa nhiều đơn vị.',
        'Giảm thời gian triển khai cho các đơn hàng tiếp theo.',
        'Đảm bảo chất lượng ổn định qua nhiều đợt sản xuất.',
      ],
    },
  ],

  'king-group': [
    {
      type: 'lead',
      text: 'Với quy mô lao động lớn, King Group thường xuyên phát sinh nhu cầu đặt mới và bổ sung đồng phục số lượng lớn. Doanh nghiệp cần một đối tác duy trì được chất lượng ổn định giữa nhiều đợt sản xuất và đảm bảo tiến độ cung ứng phục vụ vận hành nhà máy.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'King Group hoạt động trong lĩnh vực sản xuất bao bì công nghiệp. Đồng phục ở đây không phải hạng mục hình ảnh, mà là vật tư vận hành — thiếu áo là ảnh hưởng tới ca sản xuất.',
    },
    {
      type: 'p',
      text: 'Nhu cầu phát sinh liên tục và theo lô lớn, thường trên 1.000 sản phẩm mỗi đợt. Rủi ro lớn nhất không nằm ở đợt đầu, mà ở việc lô thứ năm có còn giống lô thứ nhất hay không.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Nhu cầu đặt mới và bổ sung đồng phục số lượng lớn phát sinh thường xuyên.',
        'Duy trì chất lượng ổn định giữa nhiều đợt sản xuất.',
        'Đảm bảo tiến độ cung ứng phục vụ vận hành nhà máy.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.production2,
      alt: 'Quy trình kiểm soát chất lượng nhiều lớp tại xưởng đồng phục Tân Phạm Gia',
      caption:
        'Kiểm soát chất lượng chạy từ nguyên phụ liệu, qua bán thành phẩm trên chuyền, tới thành phẩm trước khi xuất xưởng.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Với đơn hàng lặp lại quy mô lớn, thứ phải chuẩn hóa trước tiên là quy trình, không phải sản phẩm.',
    },
    {
      type: 'ol',
      items: [
        'Tư vấn chất liệu phù hợp với môi trường sản xuất cường độ cao.',
        'Áp dụng quy trình QC đa tầng từ nguyên liệu đến thành phẩm.',
        'Chuẩn hóa hồ sơ kỹ thuật phục vụ các đợt tái đặt hàng.',
        'Chủ động năng lực sản xuất đáp ứng các đơn hàng định kỳ trên 1.000 sản phẩm.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Duy trì chất lượng đồng nhất qua nhiều năm hợp tác.',
        'Hạn chế rủi ro sai lệch giữa các đợt sản xuất.',
        'Đảm bảo nguồn cung ổn định cho hoạt động nhà máy.',
      ],
    },
  ],

  /* ─── Giải pháp 2 · Văn phòng & Tập đoàn ─── */

  'coca-cola-philippines': [
    {
      type: 'lead',
      text: 'Coca-Cola Philippines yêu cầu giải pháp đồng phục đảm bảo tính đồng nhất với hệ thống nhận diện thương hiệu toàn cầu, đồng thời đáp ứng các tiêu chuẩn chất lượng trong quá trình triển khai và sản xuất tại Việt Nam.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Đây là dự án của một thương hiệu toàn cầu, nghĩa là bộ nhận diện đã được khóa cứng từ trước. Không có chỗ cho việc diễn giải lại màu sắc hay vị trí logo cho vừa với năng lực sản xuất.',
    },
    {
      type: 'p',
      text: 'Điểm khó thứ hai là khoảng cách. Toàn bộ quá trình phối hợp diễn ra từ xa, phía khách hàng không trực tiếp có mặt tại xưởng để theo dõi sản xuất.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đảm bảo màu sắc, vị trí logo và quy cách thành phẩm theo đúng tiêu chuẩn thương hiệu.',
        'Kiểm soát chất lượng khi các bên làm việc từ xa và không trực tiếp theo dõi quá trình sản xuất.',
        'Đảm bảo tiến độ sản xuất và giao hàng cho dự án quốc tế.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.production2,
      alt: 'Đối chiếu thông số và màu sắc thành phẩm trước khi xuất xưởng',
      caption:
        'Khi khách hàng không có mặt tại xưởng, mẫu duyệt trở thành căn cứ đối chiếu duy nhất.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Cách bù lại khoảng cách địa lý là tăng số bước duyệt. Mỗi bước duyệt là một lần hai bên xác nhận cùng một thứ, để đến khi sản xuất hàng loạt thì không còn điểm nào phải phỏng đoán.',
    },
    {
      type: 'ol',
      items: [
        'Triển khai 564 áo polo cho đội ngũ nhân sự văn phòng và vận hành.',
        'Chuẩn hóa toàn bộ thông số kỹ thuật theo bộ nhận diện thương hiệu của doanh nghiệp.',
        'Thực hiện quy trình duyệt mẫu nhiều bước trước khi sản xuất hàng loạt.',
        'Kiểm soát chất lượng xuyên suốt từ nguyên phụ liệu đến thành phẩm trước khi xuất hàng.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đảm bảo tính đồng nhất giữa mẫu duyệt và thành phẩm thực tế.',
        'Đáp ứng yêu cầu chất lượng của doanh nghiệp FDI.',
        'Hoàn thành dự án đúng tiến độ và tiêu chuẩn đã thống nhất.',
      ],
    },
  ],

  vfm: [
    {
      type: 'lead',
      text: 'Là doanh nghiệp quản lý quỹ đầu tư hàng đầu Việt Nam, VFM cần giải pháp đồng phục văn phòng chuyên nghiệp, phù hợp với môi trường làm việc tài chính và các hoạt động gặp gỡ nhà đầu tư, đối tác.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Trong ngành tài chính, đồng phục xuất hiện ở những buổi làm việc mà ấn tượng ban đầu có sức nặng thật: gặp nhà đầu tư, tiếp đối tác. Yêu cầu về độ chỉn chu vì thế cao hơn mặt bằng chung.',
    },
    {
      type: 'p',
      text: 'Nhưng đó cũng là bộ đồ nhân sự mặc tám tiếng mỗi ngày. Chỉn chu mà không thoải mái thì người mặc sẽ tự tìm cách không mặc.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, chỉn chu và đồng nhất với thương hiệu doanh nghiệp.',
        'Đảm bảo sự thoải mái cho nhân sự sử dụng thường xuyên trong môi trường văn phòng.',
        'Duy trì chất lượng ổn định giữa các đợt bổ sung nhân sự.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.blog.piqueFabricInspection,
      alt: 'Kiểm tra cấu trúc dệt và độ đàn hồi của vải trước khi đưa vào sản xuất',
      caption:
        'Chất liệu chống nhăn và giữ form là yêu cầu bắt buộc với đồng phục mặc hằng ngày trong môi trường văn phòng.',
      ratio: 'square',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Chúng tôi giải bài toán này ở chất liệu và form dáng, không ở kiểu dáng. Một chiếc polo giữ được form sau tám tiếng ngồi làm việc trông chuyên nghiệp hơn một thiết kế cầu kỳ đã nhàu.',
    },
    {
      type: 'ol',
      items: [
        'Triển khai 1.100 áo polo cho đội ngũ văn phòng và khối kinh doanh.',
        'Tư vấn chất liệu chống nhăn, giữ form tốt và phù hợp với tần suất sử dụng hàng ngày.',
        'Điều chỉnh form dáng nhằm nâng cao trải nghiệm mặc cho người sử dụng.',
        'Lưu trữ toàn bộ hồ sơ kỹ thuật phục vụ các đợt tái sản xuất trong tương lai.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Xây dựng hình ảnh đội ngũ chuyên nghiệp và đồng bộ.',
        'Nâng cao trải nghiệm sử dụng của nhân viên.',
        'Duy trì chất lượng ổn định qua nhiều đợt triển khai.',
      ],
    },
  ],

  'savisco-van-phong': [
    {
      type: 'lead',
      text: 'Savisco sở hữu đội ngũ nhân sự đa dạng từ khối văn phòng, kinh doanh đến dịch vụ khách hàng. Doanh nghiệp cần giải pháp đồng phục vừa đảm bảo nhận diện thương hiệu, vừa phù hợp với đặc thù của từng nhóm nhân sự.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Ba nhóm nhân sự, ba điều kiện làm việc. Khối văn phòng ngồi cố định, khối kinh doanh di chuyển, bộ phận dịch vụ khách hàng đứng tiếp xúc trực tiếp cả ngày.',
    },
    {
      type: 'p',
      text: 'Nếu cấp cùng một mẫu áo cho cả ba, sẽ có ít nhất một nhóm phải chịu thiệt. Nếu để mỗi nhóm một kiểu tự do, thương hiệu mất tính đồng bộ.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục cần phù hợp với nhiều vị trí công việc khác nhau trong cùng doanh nghiệp.',
        'Đảm bảo sự đồng bộ hình ảnh giữa các phòng ban và điểm làm việc.',
        'Duy trì tính nhất quán khi phát sinh nhu cầu bổ sung nhân sự.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.production1,
      alt: 'Sản xuất song song hai dòng sản phẩm sơ mi và polo tại xưởng Tân Phạm Gia',
      caption:
        'Hai dòng sản phẩm khác nhau nhưng dùng chung một hệ màu và một quy cách logo.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Lời giải là tách sản phẩm nhưng khóa chung phần nhận diện — cho phép mỗi nhóm có đúng thứ mình cần mà nhìn tổng thể vẫn là một đội ngũ.',
    },
    {
      type: 'ol',
      items: [
        'Triển khai 550 áo sơ mi và 400 áo polo cho các nhóm nhân sự khác nhau.',
        'Tư vấn chất liệu và form dáng phù hợp theo từng vị trí sử dụng.',
        'Chuẩn hóa hệ thống màu sắc, logo và quy cách sản xuất.',
        'Xây dựng hồ sơ kỹ thuật phục vụ tái sản xuất và quản lý đồng phục lâu dài.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đồng nhất hình ảnh đội ngũ trên toàn hệ thống.',
        'Tối ưu trải nghiệm sử dụng cho từng nhóm nhân sự.',
        'Rút ngắn thời gian triển khai các đơn hàng bổ sung và tái đặt hàng.',
      ],
    },
  ],

  /* ─── Giải pháp 3 · FMCG & Chuỗi phân phối ─── */

  vivant: [
    {
      type: 'lead',
      text: 'VIVANT là doanh nghiệp FDI với tiêu chuẩn nhận diện thương hiệu được kiểm soát chặt chẽ từ tập đoàn mẹ — đồng phục phải đúng màu Pantone, đúng vị trí logo và đúng chất lượng như mẫu duyệt, trong khi toàn bộ quy trình phê duyệt được thực hiện từ xa.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Ràng buộc ở đây được viết bằng mã màu Pantone, không phải bằng mô tả. Không có khoảng dung sai để thương lượng: hoặc đúng mã, hoặc không đạt.',
    },
    {
      type: 'p',
      text: 'Đồng thời, mọi phê duyệt đều diễn ra từ xa. Người ra quyết định cuối cùng nằm ở tập đoàn mẹ, không phải người ngồi họp cùng chúng tôi.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục phải đúng màu Pantone, đúng vị trí logo và đúng chất lượng như mẫu duyệt.',
        'Toàn bộ quy trình phê duyệt được thực hiện từ xa, khó kiểm soát trực tiếp.',
        'Tiêu chuẩn nhận diện thương hiệu được kiểm soát chặt chẽ từ tập đoàn mẹ.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.blog.poloFabricSelection,
      alt: 'So sánh mẫu vải dưới ánh sáng chuẩn để đối chiếu màu trước khi duyệt',
      caption:
        'Màu được đối chiếu trên vải thật dưới ánh sáng chuẩn, không duyệt qua ảnh chụp.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Với yêu cầu kiểu này, việc cần làm là biến mọi tiêu chuẩn thành thông số ghi được, rồi kiểm tra ở từng chặng thay vì để dồn tới cuối.',
    },
    {
      type: 'ol',
      items: [
        'Chuẩn hóa toàn bộ thông số nhận diện thương hiệu.',
        'Triển khai quy trình duyệt mẫu nhiều bước.',
        'Kiểm soát chất lượng xuyên suốt quá trình sản xuất.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đảm bảo đồng nhất giữa mẫu duyệt và thành phẩm.',
        'Đáp ứng tiêu chuẩn chất lượng của doanh nghiệp FDI.',
        'Hoàn thành dự án đúng tiến độ.',
      ],
    },
  ],

  'savisco-sales-activation': [
    {
      type: 'lead',
      text: 'Đội ngũ trải rộng nhiều tỉnh thành, cường độ làm việc cao, tiếp xúc trực tiếp với người tiêu dùng hàng ngày. Đồng phục cần bền — không phai màu qua nhiều lần giặt — và đồng bộ nhận diện thương hiệu nhất quán qua nhiều đợt đặt hàng.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Đội Sales và Activation làm việc ngoài thị trường, ở nhiều tỉnh thành, với tần suất giặt cao hơn hẳn nhân sự văn phòng. Chiếc áo phải chịu nắng, chịu di chuyển và chịu giặt liên tục.',
    },
    {
      type: 'p',
      text: 'Đây cũng là nhóm nhân sự đứng ngay trước mặt người tiêu dùng. Một chiếc áo bạc màu ở điểm bán là một tín hiệu về thương hiệu mà không quảng cáo nào sửa được.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đội ngũ trải rộng nhiều tỉnh thành với cường độ làm việc cao.',
        'Đồng phục cần bền, không phai màu qua nhiều lần giặt.',
        'Đồng bộ nhận diện thương hiệu nhất quán qua nhiều đợt đặt hàng.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.blog.poloQcWorkshop,
      alt: 'Kiểm tra áo polo thành phẩm tại xưởng trước khi đóng gói',
      caption:
        'Độ bền màu được kiểm tra sau nhiều lần giặt, không đánh giá ở trạng thái vừa may xong.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Với quy mô 2.800 sản phẩm chia nhiều đợt, chất liệu và hồ sơ kỹ thuật là hai thứ phải chốt trước tiên.',
    },
    {
      type: 'ol',
      items: [
        'Tư vấn chất liệu phù hợp hoạt động ngoài thị trường.',
        'Chuẩn hóa hệ thống nhận diện thương hiệu.',
        'Quản lý hồ sơ kỹ thuật phục vụ tái sản xuất.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đồng nhất hình ảnh thương hiệu tại điểm bán.',
        'Nâng cao trải nghiệm sử dụng cho đội ngũ Sales.',
        'Đảm bảo chất lượng ổn định qua nhiều đợt triển khai.',
      ],
    },
  ],

  discovery: [
    {
      type: 'lead',
      text: 'Cơ cấu nhân sự đa dạng, nhu cầu bổ sung đồng phục phát sinh liên tục do tuyển dụng và mở rộng. Yêu cầu đặt ra là các đơn hàng về sau vẫn giữ đúng màu sắc, chất liệu và form dáng như lô ban đầu.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Doanh nghiệp đang mở rộng thì đồng phục không còn là một đơn hàng, mà là một dòng cung ứng chạy liên tục. Nhân sự mới vào tháng nào cũng có.',
    },
    {
      type: 'p',
      text: 'Rủi ro nằm ở chỗ người mới nhận áo hơi khác màu người cũ. Chỉ cần lệch một chút, cả đội hình mất tính đồng bộ mà không ai chỉ ra được lỗi ở đâu.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Cơ cấu nhân sự đa dạng, nhu cầu bổ sung đồng phục phát sinh liên tục.',
        'Các đơn hàng về sau phải giữ đúng màu sắc, chất liệu và form dáng như lô ban đầu.',
        'Tuyển dụng và mở rộng khiến quản lý đồng phục phức tạp hơn.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.heThongSanXuat,
      alt: 'Hồ sơ kỹ thuật và hệ thống sản xuất phục vụ các đợt tái đặt hàng',
      caption:
        'Hồ sơ kỹ thuật được lưu lại để đợt bổ sung sau không phải duyệt mẫu từ đầu.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Bài toán tái đặt hàng được giải bằng hồ sơ, không bằng trí nhớ. Mọi thông số đều được ghi lại để lô sau đối chiếu với lô đầu.',
    },
    {
      type: 'ol',
      items: [
        'Tư vấn sản phẩm theo từng nhóm nhân sự.',
        'Chuẩn hóa hồ sơ kỹ thuật.',
        'Duy trì tiêu chuẩn sản xuất đồng nhất.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đồng bộ hình ảnh đội ngũ trên toàn hệ thống.',
        'Rút ngắn thời gian triển khai các đơn hàng bổ sung.',
        'Duy trì chất lượng ổn định trong nhiều năm hợp tác.',
      ],
    },
  ],

  /* ─── Giải pháp 4 · Y tế, Spa & Dịch vụ ─── */

  'bv-rang-ham-mat-sai-gon': [
    {
      type: 'lead',
      text: 'Hệ thống bệnh viện cần đồng phục phù hợp cho đội ngũ bác sĩ và phụ tá, đảm bảo sự thoải mái trong cường độ làm việc cao, đồng thời duy trì hình ảnh chuyên nghiệp và đồng nhất giữa các chi nhánh.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Trong môi trường y tế, đồng phục còn mang chức năng phân biệt vai trò. Bệnh nhân cần nhìn vào là biết ai là bác sĩ, ai là phụ tá — trước cả khi có ai kịp giới thiệu.',
    },
    {
      type: 'p',
      text: 'Cùng lúc đó, đây là bộ đồ mặc suốt ca làm việc dài với cường độ vận động liên tục. Thoải mái không phải tiện nghi, mà là điều kiện làm việc.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục cần phù hợp cho đội ngũ bác sĩ và phụ tá với cường độ làm việc cao.',
        'Đảm bảo sự thoải mái trong quá trình sử dụng hàng ngày.',
        'Duy trì hình ảnh chuyên nghiệp và đồng nhất giữa các chi nhánh.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.blog.medicalUniform,
      alt: 'Mẫu đồng phục y tế scrub và áo blouse',
      caption:
        'Hai dòng sản phẩm cho hai vai trò: áo blouse cho bác sĩ và bộ scrub cho phụ tá.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Chúng tôi xây hệ thống đồng phục theo vị trí công việc, để việc phân biệt vai trò nằm sẵn trong thiết kế thay vì phải gắn thêm phù hiệu.',
    },
    {
      type: 'ol',
      items: [
        'Xây dựng hệ thống đồng phục theo từng vị trí công việc.',
        'Chuẩn hóa màu sắc và nhận diện thương hiệu.',
        'Lưu trữ hồ sơ kỹ thuật phục vụ các đợt bổ sung nhân sự.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đồng bộ hình ảnh trên toàn hệ thống.',
        'Nâng cao trải nghiệm đội ngũ.',
        'Duy trì chất lượng ổn định qua nhiều năm hợp tác.',
      ],
    },
  ],

  'engadine-clinic': [
    {
      type: 'lead',
      text: 'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, hiện đại và phù hợp với định vị thương hiệu, đồng thời đảm bảo sự thoải mái cho đội ngũ nhân viên trong quá trình làm việc.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Với phòng khám, đồng phục là một phần của trải nghiệm dịch vụ. Khách hàng đánh giá chất lượng qua những gì họ nhìn thấy trước khi được tư vấn.',
    },
    {
      type: 'p',
      text: 'Đội ngũ ở đây gồm hai nhóm có nhu cầu vận động khác nhau: nhân sự tư vấn và kỹ thuật viên. Form dáng phải phục vụ được cả hai.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, hiện đại theo định vị thương hiệu.',
        'Đảm bảo sự thoải mái cho đội ngũ nhân viên trong quá trình làm việc.',
        'Phù hợp với đội ngũ tư vấn và kỹ thuật viên có nhu cầu vận động linh hoạt.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.blog.piqueFabricInspection,
      alt: 'Kiểm tra độ mềm và độ co giãn của chất liệu trước khi đưa vào sản xuất',
      caption:
        'Chất liệu mềm và co giãn được ưu tiên vì kỹ thuật viên vận động liên tục trong ca làm việc.',
      ratio: 'square',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Thiết kế đi từ định vị thương hiệu xuống, còn chất liệu và form dáng đi từ điều kiện làm việc lên. Hai hướng gặp nhau ở bản mẫu duyệt.',
    },
    {
      type: 'ol',
      items: [
        'Tư vấn thiết kế theo nhận diện thương hiệu.',
        'Lựa chọn chất liệu mềm mại, co giãn và thẩm mỹ cao.',
        'Tối ưu form dáng cho đội ngũ tư vấn và kỹ thuật viên.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Tăng tính chuyên nghiệp trong trải nghiệm dịch vụ.',
        'Đồng bộ hình ảnh thương hiệu tại mọi điểm chạm.',
        'Gia tăng sự tự tin cho đội ngũ nhân sự.',
      ],
    },
  ],

  betrimex: [
    {
      type: 'lead',
      text: 'Doanh nghiệp cần chuẩn hóa hình ảnh đội ngũ, duy trì chất lượng đồng phục giữa các đợt sản xuất và đơn giản hóa việc quản lý khi thường xuyên phát sinh nhu cầu bổ sung nhân sự.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Khi doanh nghiệp có nhiều chi nhánh, việc quản lý đồng phục nhanh chóng trở thành gánh nặng hành chính: ai mặc gì, size nào, đặt thêm ở đâu, đối chiếu với lô nào.',
    },
    {
      type: 'p',
      text: 'Bài toán thật ở đây là giảm công quản lý, chứ không chỉ là may xong một lô áo.',
    },

    { type: 'h2', text: 'Bài toán đặt ra' },
    {
      type: 'ul',
      items: [
        'Cần chuẩn hóa hình ảnh đội ngũ trên toàn hệ thống.',
        'Duy trì chất lượng đồng phục giữa các đợt sản xuất.',
        'Đơn giản hóa quản lý khi thường xuyên phát sinh nhu cầu bổ sung nhân sự.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.production1,
      alt: 'Phân nhóm và đóng gói sản phẩm theo từng vị trí công việc',
      caption:
        'Sản phẩm được phân nhóm theo vị trí công việc ngay từ khâu lập kế hoạch sản xuất.',
    },

    { type: 'h2', text: 'Cách Tân Phạm Gia triển khai' },
    {
      type: 'p',
      text: 'Chúng tôi chuẩn hóa bảng size và hồ sơ kỹ thuật để mỗi đợt bổ sung sau chỉ còn là thao tác đặt lại theo mã, không phải một dự án mới.',
    },
    {
      type: 'ol',
      items: [
        'Phân nhóm sản phẩm theo từng vị trí công việc.',
        'Chuẩn hóa bảng size và hồ sơ kỹ thuật.',
        'Duy trì tiêu chuẩn sản xuất cho các đợt tái đặt hàng.',
      ],
    },

    { type: 'h2', text: 'Kết quả' },
    {
      type: 'ul',
      items: [
        'Đơn giản hóa công tác quản lý đồng phục.',
        'Đảm bảo tính đồng nhất giữa các chi nhánh.',
        'Rút ngắn thời gian triển khai các đơn hàng bổ sung.',
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   BLOG — vài bài demo
   ═══════════════════════════════════════════════════════════════ */

const blogBodies: Record<string, PostBlock[]> = {
  'chon-vai-polo-khi-hau-viet-nam': [
    {
      type: 'lead',
      text: 'Một chiếc áo polo đồng phục đạt chuẩn cần bền đẹp theo thời gian, thoải mái khi vận động và phù hợp với hình ảnh thương hiệu. Vì vậy, lựa chọn chất liệu nên bắt đầu từ điều kiện sử dụng thực tế, không phải từ tên vải.',
    },

    { type: 'h2', text: 'Bắt đầu từ môi trường làm việc' },
    {
      type: 'p',
      text: 'Đội ngũ văn phòng, nhân viên bán hàng ngoài thị trường và công nhân trong nhà máy có cường độ vận động hoàn toàn khác nhau. Cùng một kiểu áo polo, nhưng yêu cầu về độ thoáng khí, co giãn và khả năng giữ form không giống nhau.',
    },
    {
      type: 'p',
      text: 'Trước khi đề xuất chất liệu, cần xác định tần suất sử dụng, môi trường nhiệt độ, cách giặt bảo quản và tiêu chuẩn nhận diện của doanh nghiệp. Những thông tin này thu hẹp lựa chọn và tránh đầu tư vào một loại vải đẹp lúc mới may nhưng không bền khi dùng thật.',
    },

    {
      type: 'figure',
      src: siteAssets.blog.piqueFabricInspection,
      alt: 'Kiểm tra cấu trúc dệt và độ đàn hồi của vải pique màu navy',
      caption: 'Bề mặt pique cần đều, ổn định và dễ chịu khi tiếp xúc trực tiếp với da.',
      ratio: 'square',
    },

    { type: 'h2', text: 'Năm tiêu chí cần kiểm tra' },
    {
      type: 'ol',
      items: [
        'Độ co rút: vải cần ổn định sau giặt để áo không bị ngắn thân, xoắn sườn hoặc lệch thông số.',
        'Độ bền màu: màu duy trì qua nhiều lần giặt và hạn chế phai khi ma sát hoặc tiếp xúc mồ hôi.',
        'Độ thoáng khí: cấu trúc dệt hỗ trợ thoát nhiệt, thấm hút và tạo cảm giác dễ chịu khi mặc lâu.',
        'Độ bền đường may: chất liệu và chỉ may phải tương thích để đường may phẳng, chắc, không làm bai vải.',
        'Khả năng giữ form: cổ, bo tay và thân áo duy trì hình dáng sau thời gian sử dụng thực tế.',
      ],
    },

    { type: 'h2', text: 'Ba nhóm chất liệu phổ biến' },
    {
      type: 'p',
      text: 'Không có một loại vải tốt nhất cho mọi doanh nghiệp. Phương án phù hợp là phương án cân bằng được trải nghiệm người mặc, hình ảnh thương hiệu, tuổi thọ và ngân sách của dự án.',
    },
    {
      type: 'table',
      caption: 'Bảng so sánh ba nhóm chất liệu polo, có thể cuộn ngang',
      head: ['Chất liệu', 'Điểm mạnh', 'Phù hợp'],
      rows: [
        ['Pique cotton', 'Mềm, thoáng và tự nhiên', 'Văn phòng, sự kiện cao cấp'],
        ['Pique CVC', 'Cân bằng thấm hút và độ bền', 'Chuỗi cửa hàng, đội ngũ bán hàng'],
        ['Pique polyester', 'Bền màu, nhanh khô, giữ form', 'Nhà máy, vận hành, ngoài trời'],
      ],
    },

    { type: 'h2', text: 'Kiểm tra mẫu trước khi sản xuất' },
    {
      type: 'p',
      text: 'Thông số trên catalogue chỉ là bước tham khảo. Mẫu thực tế mới giúp doanh nghiệp đánh giá chính xác màu sắc, độ rũ, cảm giác mặc và mức độ phù hợp với form áo đã chọn.',
    },
    {
      type: 'p',
      text: 'Với dự án số lượng lớn, bước duyệt mẫu còn là căn cứ để kiểm soát chất lượng giữa các lô sản xuất — và là thứ hai bên đối chiếu khi có khác biệt.',
    },

    { type: 'h2', text: 'Kết luận' },
    {
      type: 'p',
      text: 'Khi chọn vải polo, doanh nghiệp nên đánh giá đồng thời điều kiện làm việc, tần suất sử dụng, khả năng bảo quản và yêu cầu nhận diện. Kiểm tra mẫu thực tế trước khi chốt sản xuất sẽ giảm rủi ro sai lệch và tạo nền tảng ổn định cho những lần tái đặt hàng sau.',
    },
  ],

  'dong-phuc-toi-gian-branding-2024': [
    {
      type: 'lead',
      text: 'Xu hướng đồng phục tối giản không phải là bỏ bớt chi tiết cho rẻ. Nó là chuyển trọng tâm nhận diện từ hoạ tiết sang chất liệu, form dáng và độ chính xác của những chi tiết còn lại.',
    },

    { type: 'h2', text: 'Tối giản không đồng nghĩa với đơn giản' },
    {
      type: 'p',
      text: 'Khi bỏ đi hoạ tiết lớn và mảng màu tương phản, mọi khiếm khuyết còn lại đều lộ ra. Một đường may lệch hay một logo thêu sai vị trí vài milimet trên nền áo trơn sẽ dễ thấy hơn nhiều so với trên áo nhiều chi tiết.',
    },
    {
      type: 'p',
      text: 'Vì vậy đồng phục tối giản đòi hỏi tiêu chuẩn sản xuất cao hơn, không thấp hơn.',
    },

    {
      type: 'figure',
      src: siteAssets.blog.dongPhucToiGian,
      alt: 'Đồng phục doanh nghiệp thiết kế tối giản trên nền màu trung tính',
      caption: 'Trên nền áo trơn, nhận diện dựa vào tỉ lệ logo và độ chuẩn của đường may.',
    },

    { type: 'h2', text: 'Ba thứ gánh nhận diện thay hoạ tiết' },
    {
      type: 'ul',
      items: [
        'Màu sắc: một mã màu duy nhất dùng nhất quán qua mọi đợt sản xuất có sức nhận diện mạnh hơn nhiều mảng màu phối rời rạc.',
        'Form dáng: dáng áo vừa vặn và ổn định theo thời gian là thứ người đối diện cảm nhận trước cả logo.',
        'Chi tiết nhỏ: bo cổ, bo tay, đường lơ-vê và vị trí logo — vài milimet quyết định cảm giác chỉn chu.',
      ],
    },

    { type: 'h2', text: 'Cần chuẩn bị gì trước khi chuyển sang hướng tối giản' },
    {
      type: 'p',
      text: 'Doanh nghiệp nên chốt mã màu và quy cách logo trước, rồi mới bàn tới kiểu dáng. Khi phần nhận diện đã khóa, việc mở rộng sang các nhóm nhân sự khác chỉ còn là chọn dáng áo phù hợp với từng điều kiện làm việc.',
    },
  ],

  'medical-uniform-2025': [
    {
      type: 'lead',
      text: 'Đồng phục y tế có bộ tiêu chí riêng, khác hẳn đồng phục văn phòng. Yếu tố quyết định không phải kiểu dáng, mà là chất liệu, khả năng vệ sinh và mức độ thoải mái trong ca làm việc dài.',
    },

    { type: 'h2', text: 'Vì sao đồng phục y tế cần tiêu chí riêng' },
    {
      type: 'p',
      text: 'Ca làm việc trong môi trường y tế thường kéo dài, cường độ vận động liên tục và tần suất giặt cao hơn hẳn các ngành khác. Một chất liệu tốt cho văn phòng chưa chắc chịu được điều kiện này.',
    },
    {
      type: 'p',
      text: 'Ngoài ra, đồng phục còn mang chức năng phân biệt vai trò giữa bác sĩ, điều dưỡng và phụ tá — thông tin mà bệnh nhân cần đọc được ngay từ cái nhìn đầu tiên.',
    },

    {
      type: 'figure',
      src: siteAssets.blog.medicalUniform,
      alt: 'Bộ sưu tập đồng phục y tế gồm áo blouse và bộ scrub',
      caption: 'Áo blouse và bộ scrub là hai dòng chính, phân theo vai trò trong cơ sở y tế.',
    },

    { type: 'h2', text: 'Bốn tiêu chí khi chọn chất liệu' },
    {
      type: 'ul',
      items: [
        'Độ bền qua tần suất giặt cao, bao gồm giặt ở nhiệt độ cao.',
        'Khả năng thoáng khí và thấm hút cho ca làm việc dài.',
        'Độ co giãn đủ cho các thao tác vận động liên tục.',
        'Giữ form và giữ màu sau nhiều chu kỳ sử dụng.',
      ],
    },

    { type: 'h2', text: 'Phân nhóm sản phẩm theo vai trò' },
    {
      type: 'p',
      text: 'Cách làm hiệu quả là xây hệ thống đồng phục theo vị trí công việc ngay từ đầu, thay vì cấp cùng một mẫu rồi gắn thêm phù hiệu để phân biệt. Hệ thống này cũng giúp việc bổ sung nhân sự về sau đơn giản hơn nhiều.',
    },
  ],

  'san-xuat-10000-ao-thun-7-ngay': [
    {
      type: 'lead',
      text: 'Dự án yêu cầu hoàn thiện 10.000 áo thun trong bảy ngày, đồng thời duy trì độ ổn định về màu sắc, thông số và chất lượng đường may giữa nhiều chuyền sản xuất.',
    },

    { type: 'h2', text: 'Bối cảnh dự án' },
    {
      type: 'p',
      text: 'Bảy ngày là toàn bộ thời gian có, tính cả duyệt mẫu, chuẩn bị nguyên phụ liệu, tổ chức sản xuất, kiểm tra và đóng gói theo từng đợt. Không có khoảng đệm để làm lại.',
    },
    {
      type: 'p',
      text: 'Khi chia việc ra nhiều chuyền để chạy song song, rủi ro không nằm ở tốc độ mà ở độ đồng nhất — sản phẩm của chuyền này phải giống chuyền kia.',
    },

    {
      type: 'figure',
      src: siteAssets.about.production1,
      alt: 'Công nhân đang vận hành chuyền may đồng phục tại xưởng Tân Phạm Gia',
      caption: 'Chuyền sản xuất được phân bổ theo năng lực và tiến độ của từng công đoạn.',
    },

    { type: 'h2', text: 'Thách thức cần giải quyết' },
    {
      type: 'ul',
      items: [
        'Giữ màu sắc và thông số đồng nhất giữa các lô sản xuất.',
        'Rút ngắn thời gian chờ giữa may, hoàn thiện và đóng gói.',
        'Kiểm soát lỗi ngay tại chuyền thay vì đợi đến bước cuối.',
      ],
    },

    { type: 'h2', text: 'Cách tổ chức sản xuất' },
    {
      type: 'p',
      text: 'Kế hoạch được chia thành các đợt bàn giao nhỏ, bố trí người phụ trách tại từng cụm công đoạn và cập nhật sản lượng thực tế theo ca.',
    },
    {
      type: 'ol',
      items: [
        'Chia chuyền theo năng lực: mỗi chuyền nhận một nhóm size và số lượng phù hợp.',
        'Kiểm tra tại chỗ: lỗi được ghi nhận và xử lý ngay trong ca sản xuất.',
        'Đóng gói theo từng đợt: hàng đạt chuẩn được tách lô để sẵn sàng bàn giao.',
      ],
    },

    {
      type: 'figure',
      src: siteAssets.about.production2,
      alt: 'Quy trình kiểm soát chất lượng nhiều lớp tại xưởng đồng phục',
      caption: 'Mỗi lô hàng được đối chiếu thông số, màu sắc, đường may và quy cách đóng gói.',
    },

    { type: 'h2', text: 'Kết quả bàn giao' },
    {
      type: 'p',
      text: 'Toàn bộ sản phẩm được hoàn thiện theo kế hoạch, chia lô rõ ràng và có biên bản kiểm soát chất lượng trước khi xuất xưởng.',
    },
  ],
};

/** Tra thân bài theo slug. Trả về mảng rỗng nếu bài chưa có nội dung. */
export const postBodies: Record<string, PostBlock[]> = {
  ...caseStudyBodies,
  ...blogBodies,
};

export function getPostBody(slug: string): PostBlock[] {
  return postBodies[slug] ?? [];
}

/**
 * Tra case study theo ĐƯỜNG DẪN thật: <nhóm giải pháp>/<dự án>.
 *
 * Cần bảng này vì hai dự án SAVISCO khác nhau lại trùng slug — một ở nhóm
 * Văn phòng & Tập đoàn, một ở nhóm FMCG. Chỉ nhìn slug thì không phân biệt được.
 */
const caseKeyByPath: Record<string, string> = {
  'giai-phap-1/dat-group': 'dat-group',
  'giai-phap-1/zero-waste': 'zero-waste',
  'giai-phap-1/king-group': 'king-group',
  'giai-phap-2/coca-cola-philippines': 'coca-cola-philippines',
  'giai-phap-2/vfm': 'vfm',
  'giai-phap-2/savisco': 'savisco-van-phong',
  'giai-phap-3/vivant': 'vivant',
  'giai-phap-3/savisco': 'savisco-sales-activation',
  'giai-phap-3/discovery': 'discovery',
  'giai-phap-4/bv-rang-ham-mat-sai-gon': 'bv-rang-ham-mat-sai-gon',
  'giai-phap-4/engadine-clinic': 'engadine-clinic',
  'giai-phap-4/betrimex': 'betrimex',
};

function caseKey(solutionSlug: string, projectSlug: string): string | undefined {
  return caseKeyByPath[`${solutionSlug}/${projectSlug}`];
}

export function getCaseBody(solutionSlug: string, projectSlug: string): PostBlock[] {
  const key = caseKey(solutionSlug, projectSlug);
  return key ? (caseStudyBodies[key] ?? []) : [];
}

