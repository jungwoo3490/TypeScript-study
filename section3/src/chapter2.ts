/**
 * Unknown 타입 -> 모든 타입의 슈퍼타입
 */

function unknownExam() {

    // 업캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;


    // 다운캐스팅 -> 에러 발생
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;

}

// 

/**
 * Never 타입 -> 모든 타입의 서브타입
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 -> 에러 발생
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입 -> 반환값이 없는 함수의 반환값 타입 명시
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    // 업캐스팅
    let voidVar: void = undefined;
}

/**
 * Any 타입 -> 타입 계층도를 완벽히 무시 -> 모든 타입의 슈퍼타입이기도 하며, Never 타입을 제외한 모든 타입의 서브타입이기도 함
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    // 다운캐스팅 -> 오류 X -> 타입 계층도 무시
    anyVar = unknownVar;

    // 다운캐스팅 -> 오류 X -> 타입 계층도 무시
    undefinedVar = anyVar;

    // never 타입으로 다운캐스팅은 불가
    // neverVar = anyVar;
}