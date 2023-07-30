// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이정우",
    nickname: "jungwoo",
    birth: "2001.02.14",
    bio: "안녕하세요",
    location: "수원시"
};

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "jungwoo",
    birth: "2001.02.14",
    bio: "안녕하세요",
    location: "수원시"
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string] : string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedStates: "us",
    UnitedKingdom: "uk"
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    UnitedKingdom: 826
};