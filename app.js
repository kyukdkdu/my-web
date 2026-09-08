/* ============================================================
   Dremory · 灵感图集  —— 交互逻辑
   纯 HTML/CSS/JS + localStorage，无需后端即可运行
   ============================================================ */
'use strict';

/* ================= 一、多语言词典 ================= */
const I18N = {
  zh: {
    searchPh: '搜索作品、标签或作者',
    nav_upload: '发布作品', nav_login: '登录', nav_register: '注册',
    nav_logout: '退出登录', nav_profile: '个人主页', nav_purchases: '我的购买',
    hero_badge: '✨ 摄影 · AI 艺术 · 画册 · 插画',
    hero_title: '<span class="grad">发现并收藏</span><br>打动你的每一幅作品',
    hero_sub: '注册即可上传摄影与 AI 创作，上架实物画册与虚拟插画，自由定价或免费分享。',
    hero_explore: '开始探索', hero_upload: '发布我的作品',
    stat_works: '幅作品', stat_creators: '位创作者', stat_langs: '种语言',
    f_all: '全部', f_photo: '摄影作品', f_ai: 'AI 生成', f_album: '实物画册', f_illu: '虚拟插画', f_free: '免费',
    tag_title: '标签分类', empty_tip: '没有找到匹配的作品，换个关键词试试吧',
    card_view: '查看', card_free: '免费', card_by: 'by',
    detail_seller: '创作者', detail_follow: '+ 关注', detail_following: '已关注',
    detail_price: '价格', detail_tags: '衍生标签 · 点击查看更多同类作品',
    detail_related: '相关推荐', detail_rotate: '旋转',
    share_title: '分享作品', share_qrTip: '微信扫码分享',
    share_copyOk: '链接已复制，快去粘贴分享吧',
    toast_maxImgs: '一次最多上传 10 张图片',
    detail_buy: '立即购买', detail_get: '免费获取', detail_owned: '已拥有 ✓',
    up_title: '发布新作品', up_sub: '上传的图片将自动添加 Dremory 水印以保护版权',
    up_name: '作品标题', up_namePh: '给作品起个名字',
    up_type: '作品类型',
    type_photo: '摄影作品（自己拍摄）', type_ai: 'AI 生成作品（将标注 AI 提醒买家）',
    type_album: '实物画册（实体发货）', type_illu: '虚拟插画（数字下载）',
    type_photo_s: '摄影作品', type_ai_s: 'AI 生成', type_album_s: '实物画册', type_illu_s: '虚拟插画',
    up_desc: '作品描述', up_descPh: '介绍一下你的创作灵感、尺寸或交付方式…',
    up_orient: '画幅方向', up_orientP: '纵向', up_orientL: '横向',
    up_price: '定价', up_free: '免费分享',
    up_tags: '标签（用逗号分隔，最多 5 个）', up_tagsPh: '例如：风景, 水彩, 治愈',
    up_imgs: '作品图片（可多选）', up_drag: '点击或拖拽图片到这里上传',
    up_hint: '支持 JPG / PNG，最多 10 张，自动压缩并添加水印',
    up_aiNotice: '该作品将被标注「AI 生成」，买家在详情页会看到明显提示。',
    up_cancel: '取消', up_submit: '发布作品',
    auth_login: '欢迎回来', auth_sub: '登录后即可发布与购买作品',
    auth_user: '用户名', auth_email: '邮箱（选填）', auth_pass: '密码', auth_pass2: '确认密码',
    auth_loginBtn: '登录', auth_regBtn: '注册账号',
    prof_edit: '编辑资料', prof_works: '作品', prof_likes: '获赞', prof_buys: '已购', prof_fans: '粉丝',
    prof_myworks: '我的作品', prof_mybuys: '我的购买',
    prof_name: '昵称', prof_bio: '个人简介', prof_editing: '编辑资料中 · EDITING',
    prof_banner: '更换横幅配色', prof_cancel: '取消', prof_save: '保存资料',
    pf_empty: '这里还空空如也，去发布第一件作品吧～',
    pf_buys_empty: '还没有购买任何作品，去挑一幅喜欢的吧～',
    pay_title: '确认订单', pay_wechat: '微信支付', pay_ali: '支付宝',
    pay_confirm: '确认支付', pay_demo: '* 本站为毕设演示，支付流程为模拟效果，不会产生真实交易',
    footer_text: 'Dremory 灵感图集 · 毕业设计演示站点 · 所有上传图片均受水印版权保护',
    toast_needLogin: '请先登录后再操作哦', toast_uploaded: '作品发布成功，已添加水印保护',
    toast_bought: '支付成功，作品已加入「我的购买」',
    toast_got: '已免费获取，可在「我的购买」中查看',
    toast_owned: '你已拥有该作品', toast_saved: '资料已保存',
    toast_followed: '已关注', toast_unfollowed: '已取消关注',
    toast_regOk: '注册成功，欢迎加入 Dremory', toast_loginOk: '登录成功',
    toast_loginFail: '用户名或密码错误', toast_userExists: '该用户名已被注册',
    toast_fillAll: '请完整填写信息', toast_imgRequired: '请至少上传一张图片',
    toast_nameShort: '用户名至少 3 个字符', toast_passShort: '密码至少 6 位',
    toast_passMismatch: '两次密码不一致', toast_paying: '正在安全支付…',
    toast_titleRequired: '请填写作品标题',
    orient_p: '纵向画幅', orient_l: '横向画幅',
    default_bio: '这位创作者很神秘，还没有留下简介。'
  },
  en: {
    searchPh: 'Search works, tags or creators',
    nav_upload: 'Upload', nav_login: 'Log in', nav_register: 'Sign up',
    nav_logout: 'Log out', nav_profile: 'Profile', nav_purchases: 'My purchases',
    hero_badge: '✨ Photography · AI Art · Albums · Illustrations',
    hero_title: '<span class="grad">Discover &amp; collect</span><br>every work that moves you',
    hero_sub: 'Sign up to upload photography and AI creations, list physical albums and digital illustrations — set a price or share for free.',
    hero_explore: 'Start exploring', hero_upload: 'Publish my work',
    stat_works: 'works', stat_creators: 'creators', stat_langs: 'languages',
    f_all: 'All', f_photo: 'Photography', f_ai: 'AI Generated', f_album: 'Photo Albums', f_illu: 'Illustrations', f_free: 'Free',
    tag_title: 'Tag', empty_tip: 'No matching works. Try another keyword.',
    card_view: 'View', card_free: 'Free', card_by: 'by',
    detail_seller: 'Creator', detail_follow: '+ Follow', detail_following: 'Following',
    detail_price: 'Price', detail_tags: 'Tags · click to explore more like this',
    detail_related: 'Related works', detail_rotate: 'Rotate',
    share_title: 'Share this work', share_qrTip: 'Scan to share via WeChat',
    share_copyOk: 'Link copied — paste it anywhere',
    toast_maxImgs: 'You can upload up to 10 images at once',
    detail_buy: 'Buy now', detail_get: 'Get for free', detail_owned: 'Owned ✓',
    up_title: 'Publish a new work', up_sub: 'Uploaded images are automatically watermarked with the Dremory logo to protect your copyright',
    up_name: 'Title', up_namePh: 'Name your work',
    up_type: 'Type',
    type_photo: 'Photography (shot by me)', type_ai: 'AI-generated (buyers will see an AI label)',
    type_album: 'Physical album (shipped to you)', type_illu: 'Digital illustration (download)',
    type_photo_s: 'Photography', type_ai_s: 'AI Generated', type_album_s: 'Physical Album', type_illu_s: 'Illustration',
    up_desc: 'Description', up_descPh: 'Tell buyers about your inspiration, size or delivery…',
    up_orient: 'Orientation', up_orientP: 'Portrait', up_orientL: 'Landscape',
    up_price: 'Pricing', up_free: 'Share for free',
    up_tags: 'Tags (comma separated, up to 5)', up_tagsPh: 'e.g. nature, watercolor, healing',
    up_imgs: 'Images (multiple allowed)', up_drag: 'Click or drag images here to upload',
    up_hint: 'JPG / PNG · up to 10 images · auto compressed & watermarked',
    up_aiNotice: 'This work will be labeled “AI Generated” — buyers will see a clear notice on the detail page.',
    up_cancel: 'Cancel', up_submit: 'Publish',
    auth_login: 'Welcome back', auth_sub: 'Log in to publish and purchase works',
    auth_user: 'Username', auth_email: 'Email (optional)', auth_pass: 'Password', auth_pass2: 'Confirm password',
    auth_loginBtn: 'Log in', auth_regBtn: 'Create account',
    prof_edit: 'Edit profile', prof_works: 'Works', prof_likes: 'Likes', prof_buys: 'Purchased', prof_fans: 'Followers',
    prof_myworks: 'My works', prof_mybuys: 'My purchases',
    prof_name: 'Display name', prof_bio: 'Bio', prof_editing: 'EDITING PROFILE',
    prof_banner: 'Change banner color', prof_cancel: 'Cancel', prof_save: 'Save',
    pf_empty: 'Nothing here yet — publish your first work!',
    pf_buys_empty: 'No purchases yet — go find something you love!',
    pay_title: 'Confirm order', pay_wechat: 'WeChat Pay', pay_ali: 'Alipay',
    pay_confirm: 'Pay now', pay_demo: '* Demo for graduation project — no real payment is processed',
    footer_text: 'Dremory · Graduation project demo · All uploads are protected by watermark copyright',
    toast_needLogin: 'Please log in first', toast_uploaded: 'Published! Watermark applied for protection',
    toast_bought: 'Payment successful — added to My Purchases',
    toast_got: 'Claimed for free — check My Purchases',
    toast_owned: 'You already own this work', toast_saved: 'Profile saved',
    toast_followed: 'Followed', toast_unfollowed: 'Unfollowed',
    toast_regOk: 'Account created — welcome to Dremory!', toast_loginOk: 'Logged in',
    toast_loginFail: 'Wrong username or password', toast_userExists: 'Username already taken',
    toast_fillAll: 'Please fill in all fields', toast_imgRequired: 'Please upload at least one image',
    toast_nameShort: 'Username must be at least 3 characters', toast_passShort: 'Password must be at least 6 characters',
    toast_passMismatch: 'Passwords do not match', toast_paying: 'Processing secure payment…',
    toast_titleRequired: 'Please enter a title',
    orient_p: 'Portrait', orient_l: 'Landscape',
    default_bio: 'This creator is mysterious and has no bio yet.'
  },
  ja: {
    searchPh: '作品・タグ・作者を検索',
    nav_upload: '投稿する', nav_login: 'ログイン', nav_register: '新規登録',
    nav_logout: 'ログアウト', nav_profile: 'マイページ', nav_purchases: '購入履歴',
    hero_badge: '✨ 写真 · AIアート · 画集 · イラスト',
    hero_title: '<span class="grad">心を動かす作品を</span><br>見つけて、集めよう',
    hero_sub: '登録して写真やAI作品を投稿。实物画集やデジタルイラストを販売できます。価格設定も無料も自由。',
    hero_explore: '探してみる', hero_upload: '作品を投稿する',
    stat_works: '作品', stat_creators: 'クリエイター', stat_langs: '言語',
    f_all: 'すべて', f_photo: '写真', f_ai: 'AI生成', f_album: '实物画集', f_illu: 'イラスト', f_free: '無料',
    tag_title: 'タグ', empty_tip: '一致する作品がありません。別のキーワードをお試しください。',
    card_view: '見る', card_free: '無料', card_by: 'by',
    detail_seller: 'クリエイター', detail_follow: '+ フォロー', detail_following: 'フォロー中',
    detail_price: '価格', detail_tags: 'タグ · クリックで同じ系統の作品をもっと見る',
    detail_related: '関連作品', detail_rotate: '回転',
    share_title: '作品をシェア', share_qrTip: 'QRコードでシェア',
    share_copyOk: 'リンクをコピーしました',
    toast_maxImgs: '一度にアップロードできるのは最大10枚です',
    detail_buy: '今すぐ購入', detail_get: '無料で入手', detail_owned: '所持済み ✓',
    up_title: '新しい作品を投稿', up_sub: 'アップロードした画像には Dremory の透かしが自動で入り、著作権を保護します',
    up_name: '作品タイトル', up_namePh: '作品に名前をつけてください',
    up_type: '作品タイプ',
    type_photo: '写真作品（自分で撮影）', type_ai: 'AI生成作品（AI表記が購入者に表示）',
    type_album: '实物画集（発送あり）', type_illu: 'デジタルイラスト（ダウンロード）',
    type_photo_s: '写真', type_ai_s: 'AI生成', type_album_s: '实物画集', type_illu_s: 'イラスト',
    up_desc: '作品の説明', up_descPh: 'インスピレーションやサイズ、納品方法などを書いてください…',
    up_orient: '向き', up_orientP: '縦長', up_orientL: '横長',
    up_price: '価格設定', up_free: '無料で公開',
    up_tags: 'タグ（カンマ区切り、最大5つ）', up_tagsPh: '例：風景, 水彩, 癒し',
    up_imgs: '作品画像（複数可）', up_drag: 'クリックまたは画像をドラッグしてアップロード',
    up_hint: 'JPG / PNG · 最大10枚 · 自動圧縮＆透かし追加',
    up_aiNotice: 'この作品には「AI生成」ラベルが付き、詳細ページで購入者に明確に表示されます。',
    up_cancel: 'キャンセル', up_submit: '投稿する',
    auth_login: 'おかえりなさい', auth_sub: 'ログインして作品の投稿・購入を楽しもう',
    auth_user: 'ユーザー名', auth_email: 'メール（任意）', auth_pass: 'パスワード', auth_pass2: 'パスワード確認',
    auth_loginBtn: 'ログイン', auth_regBtn: 'アカウント作成',
    prof_edit: 'プロフィール編集', prof_works: '作品', prof_likes: 'いいね', prof_buys: '購入済み', prof_fans: 'フォロワー',
    prof_myworks: 'マイ作品', prof_mybuys: '購入履歴',
    prof_name: 'ニックネーム', prof_bio: '自己紹介', prof_editing: 'プロフィール編集中',
    prof_banner: 'バナーの色を変更', prof_cancel: 'キャンセル', prof_save: '保存する',
    pf_empty: 'まだ作品がありません。最初の作品を投稿しよう！',
    pf_buys_empty: '購入した作品はまだありません。お気に入りを見つけよう！',
    pay_title: '注文を確認', pay_wechat: 'WeChat Pay', pay_ali: 'Alipay',
    pay_confirm: '支払う', pay_demo: '* 卒業制作のデモです。実際の支払いは発生しません。',
    footer_text: 'Dremory インスピレーション集 · 卒業制作デモ · 投稿画像は透かしで著作権保護されます',
    toast_needLogin: '先にログインしてください', toast_uploaded: '投稿完了！透かしで保護しました',
    toast_bought: '支払いが完了し、購入履歴に追加されました',
    toast_got: '無料で入手しました。購入履歴で確認できます',
    toast_owned: 'すでに所持しています', toast_saved: '保存しました',
    toast_followed: 'フォローしました', toast_unfollowed: 'フォローを解除しました',
    toast_regOk: '登録完了！Dremory へようこそ', toast_loginOk: 'ログインしました',
    toast_loginFail: 'ユーザー名またはパスワードが違います', toast_userExists: 'このユーザー名は既に使われています',
    toast_fillAll: 'すべて入力してください', toast_imgRequired: '画像を1枚以上アップロードしてください',
    toast_nameShort: 'ユーザー名は3文字以上', toast_passShort: 'パスワードは6文字以上',
    toast_passMismatch: 'パスワードが一致しません', toast_paying: '安全な支払いを処理中…',
    toast_titleRequired: 'タイトルを入力してください',
    orient_p: '縦長', orient_l: '横長',
    default_bio: 'このクリエイターはまだ自己紹介を書いていません。'
  },
  ko: {
    searchPh: '작품, 태그 또는 작가 검색',
    nav_upload: '작품 올리기', nav_login: '로그인', nav_register: '회원가입',
    nav_logout: '로그아웃', nav_profile: '마이페이지', nav_purchases: '구매 내역',
    hero_badge: '✨ 사진 · AI 아트 · 화집 · 일러스트',
    hero_title: '<span class="grad">마음을 움직이는 작품을</span><br>발견하고 컬렉션하세요',
    hero_sub: '가입하면 사진과 AI 작품을 올리고, 실물 화집과 디지털 일러스트를 판매할 수 있어요. 가격 설정도 무료도 자유롭게.',
    hero_explore: '둘러보기', hero_upload: '내 작품 올리기',
    stat_works: '개 작품', stat_creators: '명의 크리에이터', stat_langs: '개 언어',
    f_all: '전체', f_photo: '사진', f_ai: 'AI 생성', f_album: '실물 화집', f_illu: '일러스트', f_free: '무료',
    tag_title: '태그', empty_tip: '일치하는 작품이 없어요. 다른 키워드를 시도해 보세요.',
    card_view: '보기', card_free: '무료', card_by: 'by',
    detail_seller: '크리에이터', detail_follow: '+ 팔로우', detail_following: '팔로잉',
    detail_price: '가격', detail_tags: '태그 · 클릭하면 같은 종류의 더 많은 작품으로 이동',
    detail_related: '추천 작품', detail_rotate: '회전',
    share_title: '작품 공유', share_qrTip: 'QR코드로 공유하기',
    share_copyOk: '링크가 복사되었어요. 붙여넣어 공유해 보세요',
    toast_maxImgs: '한 번에 최대 10장까지 올릴 수 있어요',
    detail_buy: '지금 구매', detail_get: '무료로 받기', detail_owned: '보유 중 ✓',
    up_title: '새 작품 올리기', up_sub: '업로드한 이미지에는 Dremory 로고 워터마크가 자동으로 추가되어 저작권을 보호합니다',
    up_name: '작품 제목', up_namePh: '작품 이름을 지어주세요',
    up_type: '작품 유형',
    type_photo: '사진 작품 (직접 촬영)', type_ai: 'AI 생성 작품 (구매자에게 AI 표시)',
    type_album: '실물 화집 (배송)', type_illu: '디지털 일러스트 (다운로드)',
    type_photo_s: '사진', type_ai_s: 'AI 생성', type_album_s: '실물 화집', type_illu_s: '일러스트',
    up_desc: '작품 설명', up_descPh: '영감, 사이즈 또는 전달 방식을 소개해 주세요…',
    up_orient: '비율 방향', up_orientP: '세로', up_orientL: '가로',
    up_price: '가격 설정', up_free: '무료 공유',
    up_tags: '태그 (쉼표로 구분, 최대 5개)', up_tagsPh: '예: 풍경, 수채화, 힐링',
    up_imgs: '작품 이미지 (여러 장 가능)', up_drag: '여기를 클릭하거나 이미지를 드래그하세요',
    up_hint: 'JPG / PNG · 최대 10장 · 자동 압축 및 워터마크 추가',
    up_aiNotice: '이 작품에는 "AI 생성" 라벨이 표시되어 구매자가 상세 페이지에서 명확히 확인할 수 있습니다.',
    up_cancel: '취소', up_submit: '작품 올리기',
    auth_login: '다시 오셨네요', auth_sub: '로그인하면 작품을 올리고 구매할 수 있어요',
    auth_user: '사용자 이름', auth_email: '이메일 (선택)', auth_pass: '비밀번호', auth_pass2: '비밀번호 확인',
    auth_loginBtn: '로그인', auth_regBtn: '계정 만들기',
    prof_edit: '프로필 편집', prof_works: '작품', prof_likes: '좋아요', prof_buys: '구매', prof_fans: '팔로워',
    prof_myworks: '내 작품', prof_mybuys: '구매 내역',
    prof_name: '닉네임', prof_bio: '소개', prof_editing: '프로필 편집 중',
    prof_banner: '배너 색상 변경', prof_cancel: '취소', prof_save: '저장하기',
    pf_empty: '아직 비어 있어요 — 첫 작품을 올려보세요!',
    pf_buys_empty: '구매한 작품이 아직 없어요. 마음에 드는 작품을 찾아보세요!',
    pay_title: '주문 확인', pay_wechat: '위챗페이', pay_ali: '알리페이',
    pay_confirm: '결제하기', pay_demo: '* 졸업작품 데모이며 실제 결제가 이루어지지 않습니다.',
    footer_text: 'Dremory 영감 갤러리 · 졸업작품 데모 · 모든 업로드 이미지는 워터마크로 보호됩니다',
    toast_needLogin: '먼저 로그인해 주세요', toast_uploaded: '게시 완료! 워터마크가 적용되었어요',
    toast_bought: '결제가 완료되어 구매 내역에 추가되었어요',
    toast_got: '무료로 받았어요. 구매 내역에서 확인하세요',
    toast_owned: '이미 보유하고 있는 작품이에요', toast_saved: '저장되었어요',
    toast_followed: '팔로우했어요', toast_unfollowed: '팔로우를 취소했어요',
    toast_regOk: '가입 완료! Dremory에 오신 것을 환영합니다', toast_loginOk: '로그인되었어요',
    toast_loginFail: '사용자 이름 또는 비밀번호가 틀렸어요', toast_userExists: '이미 사용 중인 사용자 이름이에요',
    toast_fillAll: '모든 항목을 입력해 주세요', toast_imgRequired: '이미지를 최소 한 장 이상 올려주세요',
    toast_nameShort: '사용자 이름은 3자 이상', toast_passShort: '비밀번호는 6자 이상',
    toast_passMismatch: '비밀번호가 일치하지 않아요', toast_paying: '안전 결제를 처리 중…',
    toast_titleRequired: '제목을 입력해 주세요',
    orient_p: '세로', orient_l: '가로',
    default_bio: '이 크리에이터는 아직 소개를 작성하지 않았어요.'
  }
};

/* ================= 二、标签体系（含四语言） ================= */
const TAGS = {
  nature:    { label: { zh: '自然风光', en: 'Nature',    ja: '自然',   ko: '자연' } },
  city:      { label: { zh: '城市街景', en: 'City',      ja: '都市',   ko: '도시' } },
  anime:     { label: { zh: '动漫二次元', en: 'Anime',    ja: 'アニメ', ko: '애니' } },
  abstract:  { label: { zh: '抽象艺术', en: 'Abstract',   ja: '抽象',   ko: '추상' } },
  animals:   { label: { zh: '萌宠动物', en: 'Animals',    ja: '動物',   ko: '동물' } },
  food:      { label: { zh: '美食摄影', en: 'Food',       ja: 'グルメ', ko: '미식' } },
  architecture: { label: { zh: '建筑空间', en: 'Architecture', ja: '建築', ko: '건축' } },
  fantasy:   { label: { zh: '奇幻世界', en: 'Fantasy',    ja: 'ファンタジー', ko: '판타지' } },
  portrait:  { label: { zh: '人像摄影', en: 'Portrait',   ja: 'ポートレート', ko: '인물' } },
  minimal:   { label: { zh: '极简主义', en: 'Minimal',    ja: 'ミニマル', ko: '미니멀' } },
  retro:     { label: { zh: '复古怀旧', en: 'Retro',      ja: 'レトロ', ko: '레트로' } },
  space:     { label: { zh: '星空宇宙', en: 'Space',      ja: '宇宙',   ko: '우주' } },
  watercolor:{ label: { zh: '水彩手绘', en: 'Watercolor', ja: '水彩',   ko: '수채화' } },
  cyberpunk: { label: { zh: '赛博朋克', en: 'Cyberpunk',  ja: 'サイバーパンク', ko: '사이버펑크' } },
  traditional:{ label: { zh: '国风水墨', en: 'Traditional', ja: '伝統',  ko: '전통' } },
  cute:      { label: { zh: '治愈系',   en: 'Healing',    ja: '癒し',   ko: '힐링' } }
};

/* ================= 三、种子创作者与作品（AI 生成图） ================= */
const AI_IMG = (prompt, size) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

const SEED_AUTHORS = {
  luna:  { name: 'Luna',  color: ['#ff9a9e', '#f6416c'] },
  kenji: { name: 'Kenji', color: ['#a18cd1', '#7b5cff'] },
  mia:   { name: 'Mia',   color: ['#43e97b', '#0fb89a'] },
  ahao:  { name: '阿浩',  color: ['#fa709a', '#f6b03b'] }
};

const SEED_ITEMS = [
  { id: 's1',  author: 'kenji', type: 'photo', orient: 'l', price: 0, tags: ['nature', 'minimal'], likes: 328,
    title: { zh: '晨雾山巅', en: 'Misty Mountain Dawn', ja: '霧の山頂', ko: '안개 낀 산정' },
    img: AI_IMG('misty mountain range at golden sunrise, layered fog, landscape photography, soft warm light', 'landscape_16_9') },
  { id: 's2',  author: 'luna', type: 'ai', orient: 'p', price: 12, tags: ['cyberpunk', 'portrait'], likes: 512,
    title: { zh: '霓虹赛博少女', en: 'Neon Cyber Girl', ja: 'ネオンサイバーガール', ko: '네온 사이버 걸' },
    img: AI_IMG('cyberpunk girl portrait with neon light reflections, pink and blue neon, digital anime art', 'portrait_4_3') },
  { id: 's3',  author: 'mia', type: 'illu', orient: 's', price: 0, tags: ['animals', 'cute', 'watercolor'], likes: 276,
    title: { zh: '水彩猫咪', en: 'Watercolor Cat', ja: '水彩猫', ko: '수채화 고양이' },
    img: AI_IMG('cute fluffy cat watercolor illustration, soft pastel colors, white background, hand drawn', 'square_hd') },
  { id: 's4',  author: 'ahao', type: 'photo', orient: 'p', price: 8, tags: ['architecture', 'minimal'], likes: 189,
    title: { zh: '白色极简建筑', en: 'White Minimal Architecture', ja: '白いミニマル建築', ko: '화이트 미니멀 건축' },
    img: AI_IMG('minimalist white modern architecture, curved concrete walls, soft shadows, architectural photography', 'portrait_4_3') },
  { id: 's5',  author: 'luna', type: 'ai', orient: 'l', price: 25, tags: ['fantasy'], likes: 643,
    title: { zh: '云中巨龙', en: 'Dragon in the Clouds', ja: '雲の竜', ko: '구름 속 용' },
    img: AI_IMG('majestic dragon flying above golden clouds, epic fantasy digital painting, dramatic light', 'landscape_16_9') },
  { id: 's6',  author: 'kenji', type: 'photo', orient: 'p', price: 0, tags: ['city', 'food'], likes: 204,
    title: { zh: '午后咖啡馆', en: 'Afternoon Café', ja: '午後のカフェ', ko: '오후의 카페' },
    img: AI_IMG('cozy coffee shop interior with warm lights, wooden tables, latte art, lifestyle photography', 'portrait_4_3') },
  { id: 's7',  author: 'mia', type: 'ai', orient: 's', price: 10, tags: ['abstract'], likes: 351,
    title: { zh: '流金抽象', en: 'Flowing Gold Abstract', ja: '流れるゴールド', ko: '유동 골드 추상' },
    img: AI_IMG('abstract fluid art, gold and deep blue swirling paint, luxury marble texture', 'square_hd') },
  { id: 's8',  author: 'kenji', type: 'photo', orient: 'l', price: 6, tags: ['city', 'nature'], likes: 427,
    title: { zh: '京都樱花道', en: 'Kyoto Sakura Road', ja: '京都の桜道', ko: '교토 벚꽃길' },
    img: AI_IMG('Kyoto street with cherry blossom trees, pink petals falling, traditional houses, spring photography', 'landscape_16_9') },
  { id: 's9',  author: 'luna', type: 'ai', orient: 'p', price: 0, tags: ['fantasy', 'minimal'], likes: 298,
    title: { zh: '浮空群岛', en: 'Floating Islands', ja: '浮かぶ島々', ko: '부유 섬' },
    img: AI_IMG('surreal floating islands with waterfalls in blue sky, dreamy fantasy concept art', 'portrait_4_3') },
  { id: 's10', author: 'mia', type: 'illu', orient: 's', price: 5, tags: ['nature', 'watercolor'], likes: 167,
    title: { zh: '植物图谱', en: 'Botanical Chart', ja: 'ボタニカル図鑑', ko: '보타니컬 도감' },
    img: AI_IMG('botanical green leaves illustration set, vintage herbarium style, cream paper background', 'square_hd') },
  { id: 's11', author: 'ahao', type: 'photo', orient: 'l', price: 9, tags: ['space', 'nature'], likes: 389,
    title: { zh: '星落沙海', en: 'Stars over Dunes', ja: '砂漠の星空', ko: '사막의 별밤' },
    img: AI_IMG('starry night milky way over desert sand dunes, astrophotography, purple and teal sky', 'landscape_16_9') },
  { id: 's12', author: 'mia', type: 'illu', orient: 'p', price: 7, tags: ['anime', 'city'], likes: 455,
    title: { zh: '雨中伞少女', en: 'Girl with Umbrella', ja: '雨傘の少女', ko: '우산 소녀' },
    img: AI_IMG('anime style girl holding umbrella in rain, city street at dusk, lofi aesthetic illustration', 'portrait_4_3') },
  { id: 's13', author: 'ahao', type: 'album', orient: 's', price: 39, tags: ['retro', 'minimal'], likes: 96,
    title: { zh: '麻布实物画册', en: 'Linen Photo Album', ja: 'リネン画集', ko: '리넨 화집' },
    img: AI_IMG('linen cover photo album book mockup on wooden table, elegant stationery photography', 'square_hd') },
  { id: 's14', author: 'kenji', type: 'photo', orient: 'p', price: 11, tags: ['nature'], likes: 233,
    title: { zh: '珊瑚海', en: 'Coral Sea', ja: 'サンゴの海', ko: '산호초 바다' },
    img: AI_IMG('vibrant underwater coral reef with tropical fish, clear blue water, diving photography', 'portrait_4_3') },
  { id: 's15', author: 'luna', type: 'ai', orient: 'l', price: 0, tags: ['retro', 'anime'], likes: 571,
    title: { zh: '90年代落日', en: '90s Retro Sunset', ja: '90年代夕焼け', ko: '90년대 노을' },
    img: AI_IMG('retro 90s anime style sunset over ocean, vaporwave colors, nostalgic, film grain', 'landscape_16_9') },
  { id: 's16', author: 'mia', type: 'photo', orient: 's', price: 0, tags: ['nature', 'minimal'], likes: 188,
    title: { zh: '花瓣露珠', en: 'Dewdrop on Petal', ja: '花びらの露', ko: '꽃잎 이슬' },
    img: AI_IMG('macro photo of dewdrop on flower petal, morning light, bokeh green background', 'square_hd') },
  { id: 's17', author: 'ahao', type: 'illu', orient: 'p', price: 13, tags: ['fantasy', 'retro'], likes: 264,
    title: { zh: '蒸汽飞艇', en: 'Steampunk Airship', ja: '蒸気飛空艇', ko: '스팀펑크 비행선' },
    img: AI_IMG('steampunk airship flying over Victorian city, brass gears and clouds, detailed illustration', 'portrait_4_3') },
  { id: 's18', author: 'kenji', type: 'photo', orient: 'l', price: 10, tags: ['space', 'nature'], likes: 342,
    title: { zh: '极光森林', en: 'Aurora Forest', ja: 'オーロラの森', ko: '오로라 숲' },
    img: AI_IMG('green northern lights aurora over snowy pine forest, winter night landscape photography', 'landscape_16_9') },
  { id: 's19', author: 'mia', type: 'ai', orient: 's', price: 4, tags: ['abstract', 'minimal'], likes: 157,
    title: { zh: '粉彩几何', en: 'Pastel Geometry', ja: 'パステル幾何', ko: '파스텔 기하' },
    img: AI_IMG('geometric pastel color poster design, soft shapes, bauhaus style, minimal flat art', 'square_hd') },
  { id: 's20', author: 'luna', type: 'photo', orient: 'p', price: 15, tags: ['portrait', 'city'], likes: 301,
    title: { zh: '街头人像', en: 'Street Portrait', ja: 'ストリートポートレート', ko: '거리 인물' },
    img: AI_IMG('street fashion portrait of young woman, urban style, natural light, film photography look', 'portrait_4_3') },
  { id: 's21', author: 'luna', type: 'ai', orient: 'l', price: 0, tags: ['abstract', 'cute'], likes: 419,
    title: { zh: '梦境云海', en: 'Dreamy Cloudscape', ja: '夢の雲海', ko: '꿈의 구름' },
    img: AI_IMG('dreamy pastel cloudscape, cotton candy clouds, soft gradient sky, surreal digital art', 'landscape_16_9') },
  { id: 's22', author: 'ahao', type: 'illu', orient: 'p', price: 18, tags: ['traditional', 'nature'], likes: 276,
    title: { zh: '墨鹤', en: 'Ink Cranes', ja: '墨の鶴', ko: '먹 학' },
    img: AI_IMG('traditional Chinese ink wash painting of red-crowned cranes, rice paper texture, elegant brush strokes', 'portrait_4_3') },
  { id: 's23', author: 'kenji', type: 'photo', orient: 's', price: 0, tags: ['food'], likes: 245,
    title: { zh: '一碗拉面', en: 'Ramen Bowl', ja: 'ラーメン', ko: '라멘 한 그릇' },
    img: AI_IMG('delicious japanese ramen bowl with chashu pork and soft egg, steam rising, food photography', 'square_hd') },
  { id: 's24', author: 'mia', type: 'ai', orient: 'p', price: 20, tags: ['cyberpunk', 'portrait'], likes: 387,
    title: { zh: '未来机器人', en: 'Future Robot', ja: '未来ロボ', ko: '퓨처 로봇' },
    img: AI_IMG('futuristic humanoid robot portrait, metallic face, soft studio light, sci-fi concept art', 'portrait_4_3') }
];

/* 各类型作品的描述模板（四语言） */
const DESC_POOL = {
  photo: {
    zh: ['高分辨率摄影作品，光影自然细腻，适合收藏与装饰使用。', '原创实拍，未经合成修改，记录真实瞬间。', '精心调色的摄影作品，可授权用于个人收藏与装饰。'],
    en: ['High-resolution photography with natural light — perfect for collection.', 'An original shot with no compositing — a true captured moment.', 'Carefully color-graded photograph for personal collection.'],
    ja: ['高解像度の写真作品、自然光で撮影。コレクションに最適です。', 'オリジナル撮影・合成なしのリアルな瞬間。', '丁寧にカラーグレーディングした写真作品です。'],
    ko: ['고해상도 사진 작품, 자연광, 소장용으로 적합합니다.', '합성 없는 오리지널 실사 사진입니다.', '정성껏 색보정한 사진 작품입니다.']
  },
  ai: {
    zh: ['由 AI 生成的数字艺术作品，风格独特，仅供虚拟收藏与壁纸使用。', 'AI 辅助创作，画面元素均为生成而非实拍。', '本作品为 AI 生成图像，购买前请留意页面标注。'],
    en: ['AI-generated digital artwork with a unique style, for virtual collection & wallpapers.', 'AI-assisted creation — every element is generated, not photographed.', 'This is an AI-generated image — please note the label before purchase.'],
    ja: ['AI生成のデジタルアート。バーチャルコレクション向けです。', 'AIによる生成作品で、実写ではありません。', 'この作品はAI生成画像です。ご購入前にご確認ください。'],
    ko: ['AI 생성 디지털 아트, 가상 소장용입니다.', 'AI 생성 작품으로 실사가 아닙니다.', '이 작품은 AI 생성 이미지입니다. 구매 전 확인해 주세요.']
  },
  album: {
    zh: ['实物画册，精装印刷，下单后实体发货，随书附赠作者签名卡片。', '纸质实体画册，采用哑光艺术纸印刷，限量发售。', '可触摸的实体画集，精心装帧，适合送礼与收藏。'],
    en: ['Physical album, hardcover printing, shipped after order with a signed card.', 'Paper art book on matte art paper — limited edition.', 'A tangible, finely bound art book — perfect as a gift.'],
    ja: ['实物画集、ハードカバー印刷。ご注文後にサインカード付きで発送。', 'マットアート紙印刷の紙の画集、限定販売。', '手に取れる丁寧な装丁の画集。ギフトにも最適です。'],
    ko: ['실물 화집, 하드커버 인쇄, 주문 후 작가 사인 카드와 함께 배송됩니다.', '매트 아트지 인쇄 종이 화집, 한정 판매.', '직접 만질 수 있는 정성껏 제본된 화집, 선물용으로 좋습니다.']
  },
  illu: {
    zh: ['虚拟数字插画，购买后可下载高清文件，支持个人使用授权。', '原创插画作品，虚拟交付，即买即得。', '手绘风格数字插画，适合头像、壁纸与桌面装饰。'],
    en: ['Digital illustration — download the high-res file after purchase.', 'Original illustration delivered virtually, instantly available.', 'Hand-drawn style digital art for avatars, wallpapers and decor.'],
    ja: ['デジタルイラスト、購入後に高解像度ファイルをダウンロード。', 'オリジナルイラスト、デジタル納品ですぐ利用可能。', '手描き風デジタルイラスト、アイコンや壁紙に。'],
    ko: ['디지털 일러스트, 구매 후 고해상도 파일 다운로드.', '오리지널 일러스트, 디지털 즉시 제공.', '손그림 스타일 디지털 아트, 프로필과 배경화면용.']
  }
};

/* ================= 四、全局状态与存储 ================= */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};

let lang = store.get('pin_lang', 'zh');
let users = store.get('pin_users', []);
let currentUser = store.get('pin_session', null) ? users.find(u => u.id === store.get('pin_session')) : null;
let userItems = store.get('pin_items', []);
let likes = store.get('pin_likes', []);
let follows = store.get('pin_follows', []);
let items = [...userItems, ...SEED_ITEMS.map(it => ({ ...it, seed: true }))];

const filter = { type: 'all', tag: null, q: '' };
let detailState = { item: null, idx: 0, rot: 0 };
let pfTab = 'works';
let pendingUploads = [];   // 待发布图片（dataURL）
const BANNER_PRESETS = [
  ['#ff9eb5', '#7b5cff'], ['#43e97b', '#38f9d7'], ['#fa709a', '#f6b03b'],
  ['#4facfe', '#00f2fe'], ['#f093fb', '#f5576c'], ['#30cfd0', '#6a5cff']
];

const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k;
const itemTitle = (it) => (it.title && (it.title[lang] || it.title.zh)) || it.titleRaw || '';
const itemDesc = (it) => {
  if (it.descRaw) return it.descRaw;               // 用户自己填写的描述
  const pool = DESC_POOL[it.type];
  if (!pool) return '';
  const seed = it.title ? (it.title.zh || '').length : (it.id || 'x').length;
  return pool[lang][seed % 3];
};
const authorOf = (it) => it.seed ? SEED_AUTHORS[it.author] : { name: it.authorName || 'artist', color: it.authorColor || ['#ff9a9e', '#f6416c'], avatar: it.authorAvatar };
const tagLabel = (id) => (TAGS[id] ? TAGS[id].label[lang] : id);
const fmtPrice = (p) => p === 0 ? t('card_free') : `¥ ${p}`;

/* ================= 五、初始化 ================= */
function init() {
  // 主题与语言
  const theme = store.get('pin_theme', 'light');
  document.documentElement.dataset.theme = theme;
  $('#langSelect').value = lang;
  bindEvents();
  applyI18n();
  renderNav();
  renderGrid();
  initCursor();
  $('#statWorks').textContent = items.length;
  // 支持 #work-<id> 分享链接直达作品详情
  const hashWork = location.hash.match(/^#work-(.+)$/);
  if (hashWork) {
    const waitItem = setInterval(() => {
      if (items.find(x => x.id === hashWork[1])) { clearInterval(waitItem); openDetail(hashWork[1]); }
    }, 400);
    setTimeout(() => clearInterval(waitItem), 8000);
  }
}

/* 应用语言到所有静态文案 */
function applyI18n() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  // hero 标题含渐变 span 与 <br>，需用 innerHTML 渲染
  $('#heroTitle').innerHTML = t('hero_title');
}

/* ================= 六、导航 / 主题 / 语言 ================= */
function bindEvents() {
  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    store.set('pin_theme', next);
  });

  $('#langSelect').addEventListener('change', (e) => {
    lang = e.target.value;
    store.set('pin_lang', lang);
    applyI18n();
    renderNav();
    renderGrid();
    // 仅当详情页当前打开时才按新语言刷新，避免重新弹出已关闭的作品
    if (!$('#detailOverlay').hidden && detailState.item) openDetail(detailState.item.id, true);
    if (!$('#profileOverlay').hidden) openProfile(true);
  });

  $('#brandLink').addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  $('#heroExplore').addEventListener('click', () => $('#filterBar').scrollIntoView({ behavior: 'smooth' }));
  $('#heroUpload').addEventListener('click', openUploadFlow);
  $('#uploadBtn').addEventListener('click', openUploadFlow);
  $('#loginBtn').addEventListener('click', () => openAuth('login'));

  // 头像下拉
  $('#avatarBtn').addEventListener('click', (e) => { e.stopPropagation(); $('#avatarDropdown').classList.toggle('open'); });
  document.addEventListener('click', () => $('#avatarDropdown').classList.remove('open'));
  $('#ddProfile').addEventListener('click', openProfile);
  $('#ddPurchases').addEventListener('click', () => { openProfile(); pfTab = 'buys'; renderProfile(); });
  $('#ddLogout').addEventListener('click', logout);

  // 筛选
  $('#chips').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip').forEach(c => c.classList.toggle('active', c === chip));
    filter.type = chip.dataset.filter;
    renderGrid();
  });
  $('#tagClear').addEventListener('click', () => { filter.tag = null; renderTagBanner(); renderGrid(); });
  $('#searchInput').addEventListener('input', (e) => { filter.q = e.target.value.trim(); renderGrid(); });

  // 弹层关闭
  $$('[data-close]').forEach(el => el.addEventListener('click', () => closeOverlay(el.dataset.close)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['detail', 'auth', 'upload', 'pay', 'profile'].forEach(closeOverlay);
    }
  });

  bindAuth();
  bindUpload();
  bindDetail();
  bindPay();
  bindProfile();

  // 导航滚动阴影
  window.addEventListener('scroll', () => {
    $('#navbar').classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
}

function renderNav() {
  const logged = !!currentUser;
  $('#loginBtn').hidden = logged;
  $('#avatarMenu').hidden = !logged;
  if (logged) {
    const setAv = (el) => {
      el.innerHTML = currentUser.avatar
        ? `<img src="${currentUser.avatar}" alt="">`
        : (currentUser.name[0] || 'U').toUpperCase();
      if (currentUser.color) el.style.background = `linear-gradient(135deg, ${currentUser.color[0]}, ${currentUser.color[1]})`;
    };
    setAv($('#navAvatar')); setAv($('#ddAvatar'));
    $('#ddName').textContent = currentUser.name;
    $('#ddMail').textContent = currentUser.email || 'Dremory ID: ' + currentUser.id.slice(-6);
  }
}

/* ================= 七、鼠标聚焦光效 ================= */
function initCursor() {
  const glow = $('#cursorGlow'), ring = $('#cursorRing'), dot = $('#cursorDot');
  let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my, rx = mx, ry = my;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    glow.style.opacity = 1; ring.style.opacity = '';
  }, { passive: true });
  document.addEventListener('mouseleave', () => { glow.style.opacity = 0; ring.style.opacity = 0; });
  (function loop() {
    gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
    rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
    glow.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  // 悬停可交互元素时圆环放大
  const hoverSel = 'a, button, .chip, .card, .tag-chip, .thumb, input, select, textarea, .orient-opt, .pay-method, .pf-tab, .drop-zone, .related-card';
  document.addEventListener('mouseover', (e) => { if (e.target.closest(hoverSel)) ring.classList.add('hovering'); });
  document.addEventListener('mouseout', (e) => { if (e.target.closest(hoverSel)) ring.classList.remove('hovering'); });
}

/* ================= 八、瀑布流卡片渲染 ================= */
function filteredItems() {
  return items.filter(it => {
    if (filter.type === 'free') { if (it.price !== 0) return false; }
    else if (filter.type !== 'all' && it.type !== filter.type) return false;
    if (filter.tag && !it.tags.includes(filter.tag)) return false;
    if (filter.q) {
      const q = filter.q.toLowerCase();
      const hay = (itemTitle(it) + ' ' + it.tags.map(tagLabel).join(' ') + ' ' + authorOf(it).name + ' ' + (it.descRaw || '')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function cardHTML(it) {
  const a = authorOf(it);
  const liked = likes.includes(it.id);
  const badges = [
    it.type === 'ai' ? `<span class="badge ai">✦ AI</span>` : '',
    it.price === 0
      ? `<span class="badge free">${t('card_free')}</span>`
      : `<span class="badge price">¥${it.price}</span>`
  ].join('');
  const avInner = a.avatar
    ? `<img src="${a.avatar}" alt="">`
    : (a.name[0] || 'P').toUpperCase();
  const avStyle = a.color && !a.avatar ? `style="background:linear-gradient(135deg,${a.color[0]},${a.color[1]})"` : '';
  return `
  <article class="card" data-id="${it.id}">
    <div class="card-imgbox orient-${it.orient}">
      <img src="${it.imgs ? it.imgs[0] : it.img}" alt="${itemTitle(it)}" loading="lazy">
      <div class="card-badges">${badges}</div>
      <button class="card-like ${liked ? 'liked' : ''}" data-like="${it.id}" aria-label="like">
        <svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2 5 5.4 5c2 0 3.4 1.1 4.1 2.4l.5.9.5-.9C11.2 6.1 12.6 5 14.6 5 18 5 19.6 8.6 22 11.7 19.5 16.1 12 21 12 21z"/></svg>
      </button>
      <div class="card-overlay">
        <button class="card-quick">${t('card_view')} →</button>
        <div class="card-meta">
          <h4>${itemTitle(it)}</h4>
          <div class="author"><span class="avatar" ${avStyle}>${avInner}</span>${a.name} · ♥ ${it.likes}</div>
        </div>
      </div>
    </div>
    <div class="card-foot">
      <span class="avatar" ${avStyle}>${avInner}</span>
      <b>${itemTitle(it)}</b>
      <span class="cprice ${it.price === 0 ? 'free' : ''}">${fmtPrice(it.price)}</span>
    </div>
  </article>`;
}

function renderGrid() {
  const list = filteredItems();
  const grid = $('#grid');
  grid.innerHTML = list.map(cardHTML).join('');
  $('#emptyState').hidden = list.length > 0;
  renderTagBanner();
  observeCards();
}

function renderTagBanner() {
  const banner = $('#tagBanner');
  if (filter.tag) {
    banner.hidden = false;
    $('#tagBannerName').textContent = '# ' + tagLabel(filter.tag);
  } else banner.hidden = true;
}

/* 滚动渐入 */
let cardObserver;
function observeCards() {
  if (!cardObserver) {
    cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('revealed'); cardObserver.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
  }
  $$('.card').forEach((c, i) => { c.style.transitionDelay = `${Math.min(i % 8, 6) * 45}ms`; cardObserver.observe(c); });
}

/* 卡片事件委托（点赞 / 打开详情） */
document.addEventListener('click', (e) => {
  const likeBtn = e.target.closest('[data-like]');
  if (likeBtn) {
    e.stopPropagation();
    const id = likeBtn.dataset.like;
    const idx = likes.indexOf(id);
    if (idx >= 0) likes.splice(idx, 1); else likes.push(id);
    store.set('pin_likes', likes);
    likeBtn.classList.toggle('liked', idx < 0);
    const it = items.find(x => x.id === id);
    if (it) it.likes += idx < 0 ? 1 : -1;
    return;
  }
  const card = e.target.closest('.card');
  if (card && !card.dataset.nogrid) openDetail(card.dataset.id);
});

/* ================= 九、作品详情（旋转图集 / 标签跳转） ================= */
function bindDetail() {
  $('#imgPrev').addEventListener('click', () => switchImg(-1));
  $('#imgNext').addEventListener('click', () => switchImg(1));
  $('#rotLeft').addEventListener('click', () => rotateImg(-90));
  $('#followBtn').addEventListener('click', toggleFollow);
  $('#buyBtn').addEventListener('click', onBuyClick);
  $('#shareRow').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-share]');
    if (btn) doShare(btn.dataset.share);
  });
}

function openDetail(id, keepRot) {
  const it = items.find(x => x.id === id);
  if (!it) return;
  $('#qrPop').hidden = true;
  detailState = { item: it, idx: 0, rot: keepRot ? detailState.rot : 0 };
  const imgs = it.imgs || [it.img];

  // 图集
  $('#galleryImg').src = imgs[0];
  $('#galleryCount').textContent = `1/${imgs.length}`;
  $('#thumbs').innerHTML = imgs.map((src, i) =>
    `<div class="thumb ${i === 0 ? 'active' : ''}" data-idx="${i}"><img src="${src}" alt=""></div>`).join('');
  $('#thumbs').querySelectorAll('.thumb').forEach(t => t.addEventListener('click', () => {
    detailState.idx = +t.dataset.idx; syncImg();
  }));
  $('#imgPrev').style.display = imgs.length > 1 ? '' : 'none';
  $('#imgNext').style.display = imgs.length > 1 ? '' : 'none';
  $('#orientBadge').textContent = it.orient === 'p' ? t('orient_p') : t('orient_l');

  // 信息
  const a = authorOf(it);
  $('#detailTitle').textContent = itemTitle(it);
  $('#detailDesc').textContent = itemDesc(it);
  $('#detailAuthor').textContent = a.name;
  const av = $('#detailAvatar');
  av.innerHTML = a.avatar ? `<img src="${a.avatar}" alt="">` : (a.name[0] || 'P').toUpperCase();
  av.style.background = a.avatar ? '' : `linear-gradient(135deg,${a.color[0]},${a.color[1]})`;

  $('#detailBadges').innerHTML = [
    it.type === 'ai' ? `<span class="badge ai">✦ ${t('type_ai_s')}</span>` : '',
    `<span class="badge type">${t('type_' + it.type + '_s') || t('type_' + it.type)}</span>`,
    it.price === 0 ? `<span class="badge free">${t('card_free')}</span>` : ''
  ].join('');

  const priceEl = $('#detailPrice');
  priceEl.textContent = fmtPrice(it.price);
  priceEl.classList.toggle('free', it.price === 0);
  refreshBuyBtn();
  refreshFollowBtn();

  // 衍生标签 —— 点击跳转到该标签的分类集
  $('#detailTags').innerHTML = it.tags.map(tag =>
    `<button class="tag-chip" data-tag="${tag}">${tagLabel(tag)}</button>`).join('');
  $('#detailTags').querySelectorAll('.tag-chip').forEach(b => b.addEventListener('click', () => {
    filter.tag = b.dataset.tag;
    $$('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
    filter.type = 'all';
    closeOverlay('detail');
    renderGrid();
    $('#filterBar').scrollIntoView({ behavior: 'smooth' });
  }));

  // 相关推荐
  const related = items
    .filter(x => x.id !== it.id && (x.type === it.type || x.tags.some(tg => it.tags.includes(tg))))
    .slice(0, 6);
  $('#relatedRow').innerHTML = related.map(r => `
    <div class="related-card" data-related="${r.id}">
      <img src="${r.imgs ? r.imgs[0] : r.img}" alt="">
      <div class="rc-name">${itemTitle(r)}</div>
    </div>`).join('');
  $('#relatedRow').querySelectorAll('.related-card').forEach(c =>
    c.addEventListener('click', () => openDetail(c.dataset.related)));

  detailState.rot = 0;
  applyRotation();
  $('#galleryImg').onload = applyRotation;

  openOverlay('detail');
}

function syncImg() {
  const it = detailState.item;
  const imgs = it.imgs || [it.img];
  detailState.idx = (detailState.idx + imgs.length) % imgs.length;
  detailState.rot = 0;
  $('#galleryImg').src = imgs[detailState.idx];
  $('#galleryCount').textContent = `${detailState.idx + 1}/${imgs.length}`;
  $$('#thumbs .thumb').forEach((t, i) => t.classList.toggle('active', i === detailState.idx));
  applyRotation();
}
const switchImg = (d) => { detailState.idx += d; syncImg(); };
const rotateImg = (d) => { detailState.rot = (detailState.rot + d + 360) % 360; applyRotation(); };

/* 旋转后自动缩放，保证横/竖图都不溢出舞台 */
function applyRotation() {
  const img = $('#galleryImg');
  const stage = $('.gallery-stage');
  if (!img.naturalWidth) return;
  const bw = stage.clientWidth - 70;
  const bh = Math.min(stage.clientHeight - 90, window.innerHeight * 0.6);
  const base = Math.min(bw / img.naturalWidth, bh / img.naturalHeight, 1);
  const dw = img.naturalWidth * base, dh = img.naturalHeight * base;
  let scale = 1;
  if (detailState.rot % 180 !== 0) scale = Math.min(bw / dh, bh / dw, 1);
  img.style.transform = `rotate(${detailState.rot}deg) scale(${scale})`;
}

/* 关注 */
function followKey(it) { return it.seed ? 'seed:' + it.author : 'user:' + it.authorId; }
function refreshFollowBtn() {
  const it = detailState.item;
  const on = follows.includes(followKey(it));
  const btn = $('#followBtn');
  btn.textContent = on ? t('detail_following') : t('detail_follow');
  btn.classList.toggle('btn-outline', !on);
  btn.style.background = on ? 'var(--bg-soft)' : '';
  btn.style.color = on ? 'var(--text-2)' : '';
}
function toggleFollow() {
  if (!currentUser) return toast(t('toast_needLogin'), 'err');
  const k = followKey(detailState.item);
  const i = follows.indexOf(k);
  if (i >= 0) { follows.splice(i, 1); toast(t('toast_unfollowed')); }
  else { follows.push(k); toast(t('toast_followed')); }
  store.set('pin_follows', follows);
  refreshFollowBtn();
}

/* 购买按钮状态 */
function ownedIds() { return currentUser ? (currentUser.purchases || []).map(p => p.id) : []; }
function refreshBuyBtn() {
  const it = detailState.item;
  const btn = $('#buyBtn');
  const owned = ownedIds().includes(it.id);
  btn.disabled = owned;
  btn.textContent = owned ? t('detail_owned') : (it.price === 0 ? t('detail_get') : `${t('detail_buy')} · ¥${it.price}`);
}
function onBuyClick() {
  if (!currentUser) { toast(t('toast_needLogin'), 'err'); closeOverlay('detail'); openAuth('login'); return; }
  const it = detailState.item;
  if (ownedIds().includes(it.id)) return toast(t('toast_owned'));
  if (it.price === 0) {
    addPurchase(it, 0);
    toast(t('toast_got'));
    refreshBuyBtn();
  } else {
    $('#payThumb').src = it.imgs ? it.imgs[0] : it.img;
    $('#payName').textContent = itemTitle(it);
    $('#payType').textContent = t('type_' + it.type + '_s');
    $('#payPrice').textContent = `¥${it.price}`;
    openOverlay('pay');
  }
}

/* ================= 十、社交分享 ================= */
function copyText(txt) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
  return new Promise((resolve, reject) => {
    const ta = document.createElement('textarea');
    ta.value = txt;
    ta.style.cssText = 'position:fixed;top:-999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy') ? resolve() : reject(); }
    catch (err) { reject(err); }
    finally { ta.remove(); }
  });
}

function doShare(id) {
  const it = detailState.item;
  if (!it) return;
  const rawUrl = location.href.split('#')[0] + '#work-' + it.id;
  const encUrl = encodeURIComponent(rawUrl);
  const encText = encodeURIComponent(itemTitle(it) + ' — Dremory 灵感图集');
  const qrPop = $('#qrPop');

  // 微信：展示扫码二维码
  if (id === 'wechat') {
    $('#qrImg').src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encUrl;
    qrPop.hidden = !qrPop.hidden;
    return;
  }
  qrPop.hidden = true;

  // 直接调起分享窗口的平台
  const popups = {
    qq: `https://connect.qq.com/widget/shareqq/index.html?url=${encUrl}&title=${encText}`,
    weibo: `https://service.weibo.com/share/share.php?url=${encUrl}&title=${encText}`,
    x: `https://twitter.com/intent/tweet?url=${encUrl}&text=${encText}`
  };
  if (popups[id]) {
    window.open(popups[id], '_blank', 'width=720,height=560,noopener');
    return;
  }

  // 无网页端分享接口的平台：复制链接后打开对应站点
  const copyOpen = {
    xhs: 'https://www.xiaohongshu.com',
    ins: 'https://www.instagram.com',
    douyin: 'https://www.douyin.com',
    youtube: 'https://www.youtube.com'
  };
  if (copyOpen[id]) {
    copyText(rawUrl).then(() => toast(t('share_copyOk'))).catch(() => {});
    window.open(copyOpen[id], '_blank', 'noopener');
    return;
  }
  if (id === 'copy') {
    copyText(rawUrl).then(() => toast(t('share_copyOk'))).catch(() => {});
  }
}

/* ================= 十一、支付流程（模拟） ================= */
let payBusy = false;
function bindPay() {
  $('#payConfirm').addEventListener('click', () => {
    if (payBusy) return;
    payBusy = true;
    const btn = $('#payConfirm');
    btn.querySelector('.btn-label').hidden = true;
    btn.querySelector('.btn-loading').hidden = false;
    btn.disabled = true;
    setTimeout(() => {
      addPurchase(detailState.item, detailState.item.price);
      payBusy = false;
      btn.querySelector('.btn-label').hidden = false;
      btn.querySelector('.btn-loading').hidden = true;
      btn.disabled = false;
      closeOverlay('pay');
      toast(t('toast_bought'));
      refreshBuyBtn();
    }, 1300);
  });
}
function addPurchase(it, price) {
  currentUser.purchases = currentUser.purchases || [];
  currentUser.purchases.push({ id: it.id, price, date: Date.now() });
  persistUser();
}
function persistUser() {
  const i = users.findIndex(u => u.id === currentUser.id);
  if (i >= 0) users[i] = currentUser;
  store.set('pin_users', users);
  store.set('pin_session', currentUser.id);
}

/* ================= 十一、登录 / 注册 ================= */
let authMode = 'login';
function bindAuth() {
  $('#tabLogin').addEventListener('click', () => switchAuth('login'));
  $('#tabReg').addEventListener('click', () => switchAuth('register'));
  $('#authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#authName').value.trim();
    const pass = $('#authPass').value;
    const err = $('#authErr');
    err.textContent = '';
    if (!name || !pass || (authMode === 'register' && !$('#authPass2').value))
      return err.textContent = t('toast_fillAll');
    if (name.length < 3) return err.textContent = t('toast_nameShort');
    if (pass.length < 6) return err.textContent = t('toast_passShort');
    if (authMode === 'register') {
      if ($('#authPass2').value !== pass) return err.textContent = t('toast_passMismatch');
      if (users.some(u => u.name.toLowerCase() === name.toLowerCase()))
        return err.textContent = t('toast_userExists');
      const colors = [['#ff9a9e', '#f6416c'], ['#a18cd1', '#7b5cff'], ['#43e97b', '#0fb89a'], ['#4facfe', '#00c6fb'], ['#fa709a', '#f6b03b']];
      currentUser = {
        id: 'u' + Date.now(),
        name, email: $('#authEmail').value.trim(),
        pass, avatar: null,
        color: colors[name.length % colors.length],
        bio: '', banner: 0,
        purchases: [], joined: Date.now()
      };
      users.push(currentUser);
      persistUser();
      toast(t('toast_regOk'));
    } else {
      const u = users.find(x => x.name.toLowerCase() === name.toLowerCase() && x.pass === pass);
      if (!u) return err.textContent = t('toast_loginFail');
      currentUser = u;
      store.set('pin_session', u.id);
      toast(t('toast_loginOk'));
    }
    closeOverlay('auth');
    $('#authForm').reset();
    renderNav();
  });
}
function switchAuth(mode) {
  authMode = mode;
  $('#tabLogin').classList.toggle('active', mode === 'login');
  $('#tabReg').classList.toggle('active', mode === 'register');
  $('#emailField').hidden = mode === 'login';
  $('#pass2Field').hidden = mode === 'login';
  $('#authTitle').textContent = mode === 'login' ? t('auth_login') : t('nav_register');
  $('#authSubmit').textContent = mode === 'login' ? t('auth_loginBtn') : t('auth_regBtn');
  $('#authErr').textContent = '';
}
function openAuth(mode) { switchAuth(mode || 'login'); openOverlay('auth'); }
function logout() {
  currentUser = null;
  localStorage.removeItem('pin_session');
  $('#avatarDropdown').classList.remove('open');
  renderNav();
  closeOverlay('profile');
}

/* ================= 十二、发布作品（上传 + 水印） ================= */
function openUploadFlow() {
  if (!currentUser) { toast(t('toast_needLogin'), 'err'); openAuth('login'); return; }
  openOverlay('upload');
}

function bindUpload() {
  const dz = $('#dropZone'), input = $('#upFiles');
  // 点击区域由 <label> 原生转发到 input，无需手动 click()（避免重复触发文件对话框）
  input.addEventListener('change', () => addFiles(input.files));
  ['dragover', 'dragenter'].forEach(ev => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.add('dragover'); }));
  ['dragleave', 'drop'].forEach(ev => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.remove('dragover'); }));
  dz.addEventListener('drop', (e) => addFiles(e.dataTransfer.files));

  $('#upType').addEventListener('change', (e) => {
    $('#aiNotice').hidden = e.target.value !== 'ai';
  });
  $('#upFree').addEventListener('change', (e) => {
    $('#amountBox').hidden = e.target.checked;
  });

  $('#uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const err = $('#upErr');
    err.textContent = '';
    const title = $('#upName').value.trim();
    if (!title) return err.textContent = t('toast_titleRequired');
    if (pendingUploads.length === 0) return err.textContent = t('toast_imgRequired');

    const btn = $('#upSubmit');
    btn.disabled = true;
    btn.querySelector('.btn-label').hidden = true;
    btn.querySelector('.btn-loading').hidden = false;

    // 逐张添加水印
    const imgs = [];
    for (const dataUrl of pendingUploads) {
      try { imgs.push(await watermarkImage(dataUrl)); } catch { imgs.push(dataUrl); }
    }

    const type = $('#upType').value;
    const orient = $('#uploadForm').querySelector('input[name="orient"]:checked').value;
    const free = $('#upFree').checked;
    const amount = Math.max(0, parseInt($('#upAmount').value, 10) || 0);
    const tagRaw = $('#upTags').value.split(/[,，、]/).map(s => s.trim()).filter(Boolean).slice(0, 5);
    // 若用户输入的标签与内置标签同名（任意语言），映射到内置 id
    const tagIds = tagRaw.map(raw => {
      const hit = Object.entries(TAGS).find(([id, def]) =>
        Object.values(def.label).some(l => l.toLowerCase() === raw.toLowerCase()) || id === raw.toLowerCase());
      return hit ? hit[0] : raw;
    });

    const item = {
      id: 'u' + Date.now() + Math.floor(Math.random() * 100),
      authorId: currentUser.id,
      authorName: currentUser.name,
      authorAvatar: currentUser.avatar,
      authorColor: currentUser.color,
      type, orient,
      price: free ? 0 : (amount || 9),
      titleRaw: title,
      descRaw: $('#upDesc').value.trim(),
      tags: tagIds,
      imgs, likes: 0, ts: Date.now(), wmV: 2
    };
    userItems.unshift(item);
    try {
      store.set('pin_items', userItems);
    } catch (err) {
      // localStorage 超容量时，仅保证本次会话内可浏览
      console.warn('localStorage 容量不足，作品仅在本次会话中保留', err);
    }
    items.unshift(item);

    btn.disabled = false;
    btn.querySelector('.btn-label').hidden = false;
    btn.querySelector('.btn-loading').hidden = true;
    closeOverlay('upload');
    resetUploadForm();
    renderGrid();
    $('#statWorks').textContent = items.length;
    toast(t('toast_uploaded'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function resetUploadForm() {
  $('#uploadForm').reset();
  pendingUploads = [];
  $('#upPreviews').innerHTML = '';
  $('#dropCount').textContent = '';
  $('#amountBox').hidden = true;
  $('#aiNotice').hidden = true;
  $('#upErr').textContent = '';
}

function addFiles(fileList) {
  const files = [...fileList].filter(f => f.type.startsWith('image/'));
  const room = MAX_IMAGES - pendingUploads.length;
  if (files.length > room) toast(t('toast_maxImgs'), 'err');
  files.slice(0, Math.max(0, room)).forEach(f => {
    const reader = new FileReader();
    reader.onload = () => {
      pendingUploads.push(reader.result);
      renderPreviews();
    };
    reader.readAsDataURL(f);
  });
}
const MAX_IMAGES = 10;
function renderPreviews() {
  $('#upPreviews').innerHTML = pendingUploads.map((src, i) =>
    `<div class="up-prev"><img src="${src}" alt=""><button type="button" data-rm="${i}">×</button></div>`).join('');
  $('#upPreviews').querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => {
    pendingUploads.splice(+b.dataset.rm, 1);
    renderPreviews();
  }));
  $('#dropCount').textContent = pendingUploads.length ? `${pendingUploads.length} / ${MAX_IMAGES}` : '';
}

/* Canvas 水印：斜向平铺 © Dremory + 右下角 Logo 角标 */
function watermarkImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const MAX = 1400;
      let w = img.width, h = img.height;
      if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);

      // 1) 斜向半透明平铺水印（裁剪后仍能保护版权）
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = '#ffffff';
      const fs = Math.max(18, Math.round(w * 0.03));
      ctx.font = `700 ${fs}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(w / 2, h / 2);
      ctx.rotate(-Math.PI / 4.5);
      const text = '© Dremory';
      const tw = ctx.measureText(text).width;
      const gapX = tw * 1.9, gapY = fs * 5.2;
      for (let y = -h * 1.6; y < h * 1.6; y += gapY)
        for (let x = -w * 1.6; x < w * 1.6; x += gapX)
          ctx.fillText(text, x, y);
      ctx.restore();

      // 2) 右下角 Logo 角标
      const label = 'Dremory';
      const fs2 = Math.max(16, Math.round(w * 0.028));
      ctx.font = `800 ${fs2}px sans-serif`;
      const tw2 = ctx.measureText(label).width;
      const pad = fs2 * 0.6, chH = fs2 * 2.0, chipW = tw2 + chH + pad * 2.6;
      const cx = w - chipW - pad * 1.6, cy = h - chH - pad * 1.6, r = chH / 2;
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      roundRectPath(ctx, cx, cy, chipW, chH, r);
      ctx.fill();
      // 白色圆底 + 红色 P 点
      const dotX = cx + pad + r, dotY = cy + r;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(dotX, dotY, r * 0.66, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#e60023';
      ctx.beginPath(); ctx.arc(dotX, dotY, r * 0.36, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(label, cx + pad + chH + pad * 0.3, dotY + 1);

      resolve(c.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}
function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/* ================= 十三、个人主页（醒目编辑态） ================= */
function bindProfile() {
  $('#pfEditBtn').addEventListener('click', enterEditProfile);
  $('#editCancel').addEventListener('click', () => { exitEditProfile(); });
  $('#editSave').addEventListener('click', saveProfile);
  $('#bannerChange').addEventListener('click', () => {
    currentUser.banner = ((currentUser.banner || 0) + 1) % BANNER_PRESETS.length;
    paintEditBanner();
  });
  $('#editAvatarInput').addEventListener('change', (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => shrinkAvatar(reader.result).then(url => {
      currentUser.avatar = url;
      paintEditAvatar();
    });
    reader.readAsDataURL(f);
  });
  $$('.pf-tab').forEach(tab => tab.addEventListener('click', () => {
    pfTab = tab.dataset.pftab;
    $$('.pf-tab').forEach(t => t.classList.toggle('active', t === tab));
    renderProfileGrid();
  }));
}

function openProfile(refreshOnly) {
  if (!currentUser) { openAuth('login'); return; }
  if (!refreshOnly) openOverlay('profile');
  exitEditProfile(true);
  renderProfile();
}

function renderProfile() {
  // 横幅
  const [c1, c2] = BANNER_PRESETS[currentUser.banner || 0];
  $('#profileBanner').style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
  // 头像 / 名字 / 简介
  const av = $('#pfAvatar');
  paintAvatarEl(av, currentUser);
  $('#pfName').textContent = currentUser.name;
  $('#pfBio').textContent = currentUser.bio || t('default_bio');
  // 统计：已发表 / 粉丝 / 获赞 / 已购买
  const myWorks = items.filter(it => !it.seed && it.authorId === currentUser.id);
  const myLikes = myWorks.reduce((s, it) => s + (it.likes || 0), 0);
  const myFans = follows.filter(k => k === 'user:' + currentUser.id).length;
  $('#pfWorks').textContent = myWorks.length;
  $('#pfFans').textContent = myFans;
  $('#pfLikes').textContent = myLikes;
  $('#pfBuys').textContent = (currentUser.purchases || []).length;
  renderProfileGrid();
}

function renderProfileGrid() {
  let list, emptyText;
  if (pfTab === 'works') {
    list = items.filter(it => !it.seed && it.authorId === currentUser.id);
    emptyText = t('pf_empty');
  } else {
    const ids = ownedIds();
    list = items.filter(it => ids.includes(it.id));
    emptyText = t('pf_buys_empty');
  }
  const grid = $('#pfGrid');
  grid.innerHTML = list.map(cardHTML).join('');
  const empty = $('#pfEmpty');
  empty.hidden = list.length > 0;
  empty.querySelector('p').textContent = emptyText;
  observeCards();
}

/* —— 编辑态：醒目高亮 —— */
function enterEditProfile() {
  $('#profileView').hidden = true;
  $('#profileEdit').hidden = false;
  $('#profileEdit').classList.add('editing');
  $('#editName').value = currentUser.name;
  $('#editBio').value = currentUser.bio || '';
  paintEditBanner();
  paintEditAvatar();
}
function exitEditProfile(silent) {
  $('#profileView').hidden = false;
  $('#profileEdit').hidden = true;
  $('#profileEdit').classList.remove('editing');
  if (!silent) renderProfile();
}
function paintEditBanner() {
  const [c1, c2] = BANNER_PRESETS[currentUser.banner || 0];
  $('#editBanner').style.setProperty('--eb1', c1);
  $('#editBanner').style.setProperty('--eb2', c2);
}
function paintEditAvatar() { paintAvatarEl($('#editAvatar'), currentUser); }
function paintAvatarEl(el, u) {
  el.innerHTML = u.avatar ? `<img src="${u.avatar}" alt="">` : (u.name[0] || 'U').toUpperCase();
  el.style.background = u.avatar ? '' : `linear-gradient(135deg, ${u.color[0]}, ${u.color[1]})`;
}
function saveProfile() {
  const name = $('#editName').value.trim();
  if (name.length < 1) return toast(t('toast_fillAll'), 'err');
  currentUser.name = name;
  currentUser.bio = $('#editBio').value.trim();
  persistUser();
  // 同步该用户已发布作品的作者名/头像
  userItems.forEach(it => {
    if (it.authorId === currentUser.id) { it.authorName = currentUser.name; it.authorAvatar = currentUser.avatar; it.authorColor = currentUser.color; }
  });
  store.set('pin_items', userItems);
  renderNav();
  renderGrid();
  exitEditProfile();
  toast(t('toast_saved'));
}

/* 头像裁剪压缩为正方形 */
function shrinkAvatar(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const S = 220;
      const c = document.createElement('canvas');
      c.width = S; c.height = S;
      const ctx = c.getContext('2d');
      const side = Math.min(img.width, img.height);
      ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, S, S);
      resolve(c.toDataURL('image/jpeg', 0.85));
    };
    img.src = dataUrl;
  });
}

/* ================= 十四、弹层 & Toast 工具 ================= */
const OVERLAY_IDS = {
  detail: '#detailOverlay', auth: '#authOverlay', upload: '#uploadOverlay',
  pay: '#payOverlay', profile: '#profileOverlay'
};
function openOverlay(name) {
  $(OVERLAY_IDS[name]).hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeOverlay(name) {
  const el = $(OVERLAY_IDS[name]);
  if (!el || el.hidden) return;
  el.hidden = true;
  if (name === 'detail') detailState.item = null; // 关闭后不再记住作品，防止切语言时误弹回
  const anyOpen = Object.values(OVERLAY_IDS).some(s => !$(s).hidden);
  if (!anyOpen) {
    document.body.style.overflow = '';
    if (name === 'profile' || name === 'detail') renderGrid();
  }
}

function toast(msg, type) {
  const wrap = $('#toastWrap');
  const el = document.createElement('div');
  el.className = 'toast' + (type === 'err' ? ' err' : '');
  el.innerHTML = `<span class="t-ico">${type === 'err' ? '!' : '✓'}</span>${msg}`;
  wrap.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, 2600);
}

/* 窗口尺寸变化时重算旋转缩放 */
window.addEventListener('resize', () => { if (detailState.item) applyRotation(); });

init();
