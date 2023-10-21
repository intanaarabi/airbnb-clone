'use client';
import Image from "next/image"
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return ( <div className="hidden md:flex cursor-pointer flex-row items-center justify-center">
                <Image
            alt="Logo"
            width={100} height={100}
            layout="intrinsic"
            src="/images/logo.png"
            >
            </Image>
        </div>);
}
 
export default Logo;