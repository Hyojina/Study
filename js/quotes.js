const quotes = [
  {
    quote:
      "좋은 일을 생각하면 좋은 일이 생긴다. 나쁜 일을 생각하면 나쁜 일이 생긴다. 여러분은 여러분이 하루  종일 생각하고 있는, 바로 그것이다.",
    author: "조셉 머피",
  },
  {
    quote: "용기란 두려움이 없는 것이 아니다. 두려움에 맞서고 저항하는 것이다.",
    author: "마크 트웨인",
  },
  {
    quote: "위대한 성과는 소소한 일들이 모여 조금씩 이루어진 것이다.",
    author: "빈센트 반 고흐",
  },
  {
    quote: "삶이란 나 아닌 그 누구에게 기꺼이 연탄 한 장 되는 것",
    author: "안도현",
  },
  {
    quote:
      "참된 창조자는 항상 흔해 빠지고 하찮은 것에 주목할 만한 가치를 발견하는 사람이다.",
    author: "이고르 스트라빈스키",
  },
  {
    quote:
      "당신 인생에서 가장 위대한 결정은 당신의 정신 자세를 바꾸면서 당신 인생을 변화시킬 수 있다는 데 있다.",
    author: "알베르트 슈바이처",
  },
  { quote: "끌날 때까지 끝난 게 아니다.", author: "요기베라" },
  {
    quote:
      "긴 하루 끝에 좋은 책이 기다리고 있다는 생각만으로 그날은 더 행복해진다.",
    author: "캐슬린 노리스",
  },
  {
    quote:
      "다 쓰고 남은 걸 저축하는 게 아니라 저축하고 나서 남은 게 있으면 써라.",
    author: "워렌 버핏",
  },
  {
    quote: "경험 없는 기백은 위험하고, 기백 없는 경험은 불완전하다.",
    author: "체스필드 경",
  },
  {
    quote:
      "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
    author: "공자",
  },
  {
    quote:
      "불행한 사람을 비웃지 마라. 자기의 행복이 영원한 것이라고 누가 장담할 것인가.",
    author: "라퐁텐",
  },
  { quote: "인내 없는 열정은 광기에 불과하다.", author: "토마스 홉스" },
  {
    quote:
      "한 번도 실패하지 않았다는 건 새로운 일을 전혀 시도하고 있지 않다는 신호다.",
    author: "우디 앨런",
  },
  {
    quote:
      "남들보다 잘하려고 고민하지 마라. 지금의 나보다 잘하려고 애쓰는게 더 중요하다.",
    author: "윌리엄 포크너",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
