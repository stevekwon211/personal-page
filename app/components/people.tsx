import Image from "next/image";

import p1 from "app/public/people/p1 Medium.png";
import p2 from "app/public/people/p2 Medium.png";
import p3 from "app/public/people/p3 Medium.png";
import p4 from "app/public/people/p4 Medium.png";
import p5 from "app/public/people/p5 Medium.png";
import p6 from "app/public/people/p6 Medium.png";
import p7 from "app/public/people/p7 Medium.png";
import p8 from "app/public/people/p8 Medium.png";
import p9 from "app/public/people/p9 Medium.png";
import p10 from "app/public/people/p10 Medium.png";
import p11 from "app/public/people/p11 Medium.png";
import p12 from "app/public/people/p12 Medium.png";
import p13 from "app/public/people/p13 Medium.png";
import p14 from "app/public/people/p14 Medium.png";

export function People() {
    return (
        <div className="grid grid-cols-3 gap-4 ml-10 mb-10">
            <Image src={p12} alt="p12" width={300} height={300} />
            <Image src={p6} alt="p6" width={300} height={100} />
            <Image src={p11} alt="p11" width={300} height={300} />
            <Image src={p13} alt="p13" width={300} height={300} />
            <Image src={p9} alt="p9" width={300} height={300} />

            <Image src={p1} alt="p1" width={300} height={300} />
            <Image src={p14} alt="p14" width={300} height={300} />
            <Image src={p2} alt="p2" width={300} height={300} />
            <Image src={p3} alt="p3" width={300} height={300} />
            <Image src={p4} alt="p4" width={300} height={300} />
            <Image src={p5} alt="p5" width={300} height={300} />

            <Image src={p7} alt="p7" width={300} height={300} />
        </div>
    );
}
