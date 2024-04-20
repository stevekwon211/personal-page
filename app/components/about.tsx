import Link from "next/link";

export function About() {
    return (
        <div className="">
            <h1 className="mb-8 text-2xl font-bold tracking-tighter">doeon kwon</h1>
            <h3 className="mb-8 text-xl font-medium tracking-tighter">
                좋은 컨텐츠를 만들고 사람들을 연결하는 일을 합니다
            </h3>
            <p className="mb-4 mr-40">
                어린 시절부터 역사, 과학, 탐험 등에 관심이 많았으며, 인터넷을 통해 제가 동경하는 위인들과 컨텐츠를
                찾아다녔습니다. 그리고 더 많은 사람들이 위인들처럼 세상에 유익하고 영감을 주는 것을 창작하도록 만들고
                싶었습니다.
                <br />
                <br />
                그러나 시간이 갈수록 남에게 해를 끼치는 컨텐츠가 생겨나며 인터넷이 오염되고, 알고리즘이 사람들을
                편향적으로 만들며, 네트워크 격차가 심화되는 문제들이 발생하고 있습니다.
                <br />
                <br />
                이런 문제들이 사람들로 하여금 더 배려깊고 사회에 유익한 것을 창작하지 못하도록 방해합니다. 위인들이 더
                많이 생겨나고 좋은 창작을 통해 사람들에게 영감을 줄 수 있도록, Disquiet이라는 IT 프로덕트 메이커를 위한
                소셜 네트워크 서비스를 만들고 있습니다.
            </p>
        </div>
    );
}