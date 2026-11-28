import type { Locale } from "./locales";

export type InfoSection = "about" | "contact" | "privacy" | "terms";

export const INFO_META_DESCRIPTIONS: Record<Locale, Record<InfoSection, string>> = {
  en: {
    about: "Learn about Simple Sketchpad, our mission, editorial standards, and 100% client-side privacy architecture. A free, fast digital sketchpad for everyone.",
    contact: "Contact the Simple Sketchpad team for technical support, feedback, feature requests, or editorial inquiries. We respond within 24–48 business hours.",
    privacy: "Read the Simple Sketchpad Privacy Policy. Learn how your drawing data stays 100% private in your browser, our cookie usage, and your CCPA/GDPR rights.",
    terms: "Review the Terms and Conditions for using Simple Sketchpad. Understand acceptable use, your content ownership rights, local storage, and service limits.",
  },
  es: {
    about: "Conoce Simple Sketchpad, nuestra misión, estándares editoriales y arquitectura de privacidad 100% en el cliente. Una pizarra digital rápida y gratis.",
    contact: "Ponte en contacto con Simple Sketchpad para soporte técnico, comentarios, sugerencias o consultas editoriales. Respondemos en 24 a 48 horas laborables.",
    privacy: "Consulta la Política de Privacidad de Simple Sketchpad. Descubre cómo tus dibujos quedan 100% privados en tu navegador, cookies y derechos RGPD/CCPA.",
    terms: "Términos y Condiciones de Simple Sketchpad. Conoce las normas de uso aceptable, propiedad de tus contenidos, almacenamiento local y límites del servicio.",
  },
  ja: {
    about: "Simple Sketchpadのミッション、編集方針、および100%クライアントサイドで完結する安全なプライバシー保護アーキテクチャについてご紹介します。アカウント登録やアプリのインストールは一切不要で、誰でも今すぐブラウザ上で安全かつ快適に使える完全無料のデジタルオンライン画板です。",
    contact: "Simple Sketchpadサポートチームへのお問い合わせ窓口です。ツールの操作方法に関する技術的なご質問、新機能のリクエスト、改善のご提案、バグ報告、編集部へのお問い合わせなどを幅広く受け付けています。専任スタッフが通常24〜48営業時間以内に丁寧にご回答いたしますのでお気軽にご連絡ください。",
    privacy: "Simple Sketchpadのプライバシーポリシーです。描画データが外部サーバーへ送信されず、お使いの端末・ブラウザ内にのみ100%安全に保存される仕組みや、利便性向上のためのCookie使用基準、およびGDPRやCCPAに基づく利用者のデータ保護権利についてわかりやすく解説しています。",
    terms: "Simple Sketchpadの利用規約（サービス利用条件）のご案内です。ツールの適正利用に関するガイドライン、作成したスケッチやイラストの知的財産権および著作権の完全な帰属、ブラウザ内ローカルストレージの保存仕様、ならびに免責事項やサービス保証の制限について明確に定めています。",
  },
  fr: {
    about: "Découvrez Simple Sketchpad, notre mission, nos standards éditoriaux et notre architecture 100% côté client. Un tableau de dessin numérique gratuit et rapide.",
    contact: "Contactez l'équipe de Simple Sketchpad pour toute question technique, retour d'expérience ou demande éditoriale. Réponse sous 24 à 48 heures ouvrées.",
    privacy: "Politique de confidentialité de Simple Sketchpad : découvrez comment vos dessins restent 100% privés dans votre navigateur, les cookies et vos droits RGPD.",
    terms: "Consultez les Conditions d'utilisation de Simple Sketchpad. Propriété de vos créations, stockage local, règles d'usage et limitations de responsabilité.",
  },
  de: {
    about: "Erfahre mehr über Simple Sketchpad, unsere Mission, redaktionelle Standards und 100% clientseitige Datenschutz-Architektur. Kostenlos und ohne Anmeldung.",
    contact: "Kontaktiere das Simple Sketchpad Team für Support, Feedback, Feature-Wünsche oder redaktionelle Fragen. Wir antworten innerhalb von 24 bis 48 Stunden.",
    privacy: "Datenschutzerklärung von Simple Sketchpad: Wie deine Zeichnungen zu 100% privat im Browser bleiben, Cookie-Nutzung sowie Rechte nach DSGVO und CCPA.",
    terms: "Allgemeine Geschäftsbedingungen von Simple Sketchpad. Nutzungsbedingungen, Urheberrechte an deinen Zeichnungen, lokaler Speicher und Haftungsgrenzen.",
  },
  pt: {
    about: "Conheça o Simple Sketchpad, nossa missão, padrões editoriais e arquitetura de privacidade 100% no cliente. Uma prancha de desenho digital rápida e gratuita.",
    contact: "Entre em contato com o Simple Sketchpad para suporte técnico, feedback, sugestões ou dúvidas editoriais. Respondemos em 24 a 48 horas úteis.",
    privacy: "Política de Privacidade do Simple Sketchpad: saiba como seus desenhos permanecem 100% privados no navegador, uso de cookies e direitos RGPD e CCPA.",
    terms: "Termos e Condições de uso do Simple Sketchpad. Conheça as regras de uso, direitos de propriedade dos seus desenhos, salvamento local e responsabilidades.",
  },
  ko: {
    about: "Simple Sketchpad의 서비스 사명, 편집 가이드라인 및 100% 클라이언트 측 개인정보 보호 아키텍처를 안내합니다. 별도의 회원가입이나 프로그램 설치 없이, 웹 브라우저에서 안전하고 신속하게 자유로운 아이디어를 시각화할 수 있도록 설계된 완전 무료 디지털 온라인 그림판입니다.",
    contact: "Simple Sketchpad 기술 지원 및 고객 문의 창구입니다. 드로잉 도구 사용법, 신규 기능 제안, 버그 신고, 제휴 및 편집 관련 문의를 언제든지 환영합니다. 접수된 모든 문의는 전담 지원팀이 검토 후 영업일 기준 24~48시간 이내에 친절하고 상세하게 답변을 드립니다.",
    privacy: "Simple Sketchpad의 개인정보 처리방침입니다. 사용자의 모든 드로잉 데이터가 외부 서버로 전송되지 않고 브라우저 로컬 저장소에 100% 안전하게 보관되는 원리, 필수 쿠키 활용 목적, 그리고 GDPR 및 CCPA 규정에 따른 이용자의 권리 보장 내용을 투명하게 설명합니다.",
    terms: "Simple Sketchpad 서비스 이용약관 전문입니다. 안전하고 올바른 웹앱 이용을 위한 준수 사항, 이용자가 직접 작성하고 생성한 모든 창작물에 대한 완전한 저작권 소유 보장, 로컬 스토리지 데이터 관리 정책 및 서비스 보증 책임 제한에 관한 상세 기준을 명시하고 있습니다.",
  },
  it: {
    about: "Scopri Simple Sketchpad, la nostra missione, gli standard editoriali e l'architettura di privacy 100% lato client. Una lavagna digitale gratuita e veloce.",
    contact: "Contatta il team di Simple Sketchpad per assistenza tecnica, feedback, proposte o richieste editoriali. Rispondiamo entro 24-48 ore lavorative.",
    privacy: "Informativa sulla Privacy di Simple Sketchpad: come i tuoi disegni restano al 100% privati nel browser, gestione dei cookie e diritti GDPR e CCPA.",
    terms: "Termini e Condizioni di Simple Sketchpad. Regole di utilizzo del servizio, titolarità dei tuoi contenuti creati, archiviazione locale e responsabilità.",
  },
  zh: {
    about: "全面了解 Simple Sketchpad 的创立初衷、核心编辑准则与 100% 纯客户端本地隐私安全保护架构。免除繁琐注册，无需下载安装任何软件或插件，为全球创意创作者、学生与教育工作者提供一个轻量、纯净、安全且永久免费的跨平台数字绘图与白板板书工具，让灵感在浏览器中即刻呈现。",
    contact: "欢迎随时联系 Simple Sketchpad 官方技术支持团队。如果您在绘图过程中遇到任何技术故障，或者对画布工具、图形功能、快捷键有任何改进建议及业务合作咨询，均可随时向我们提交反馈。我们的支持团队承诺在收到留言后的 24 至 48 个工作小时内为您提供详尽回复与专业技术协助。",
    privacy: "Simple Sketchpad 官方隐私政策说明细则：深入了解您的绘图作品与草稿如何做到 100% 留存在浏览器本地而绝不上传至任何云端服务器、网站 Cookie 的使用范围与目的，以及我们在 GDPR 和 CCPA 国际合规框架下对您个人数据权利的全面保护、尊重与安全隐私保障承诺。",
    terms: "Simple Sketchpad 官方服务条款与平台在线使用条件细则。详细阅读我们的在线绘图服务准则、用户所创作绘画作品的完整版权归属与知识产权声明、浏览器本地存储的工作机制说明，以及相关免责条款与服务保证范围，全面保障每一位创作者在使用本在线绘图板时的合法权益、知情权与数据安全。",
  },
  id: {
    about: "Pelajari Simple Sketchpad, misi kami, standar editorial, dan arsitektur privasi 100% sisi klien. Papan gambar digital gratis dan cepat untuk semua orang.",
    contact: "Hubungi tim Simple Sketchpad untuk dukungan teknis, saran, permintaan fitur, atau pertanyaan editorial. Kami membalas dalam kurun waktu 24–48 jam kerja.",
    privacy: "Kebijakan Privasi Simple Sketchpad: pelajari bagaimana data gambar Anda tetap 100% privat di peramban, penggunaan cookie, dan hak privasi GDPR/CCPA.",
    terms: "Syarat dan Ketentuan Simple Sketchpad. Pahami aturan penggunaan layanan, hak kepemilikan karya Anda, penyimpanan lokal, dan batasan tanggung jawab.",
  },
};

export function getInfoMetaDescription(section: InfoSection, locale: Locale): string {
  return INFO_META_DESCRIPTIONS[locale]?.[section] ?? INFO_META_DESCRIPTIONS.en[section];
}
