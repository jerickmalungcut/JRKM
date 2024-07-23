import "./index.css";
import Image from "next/image";

const InfiniteMarquee = () => {
  return (
    <div className="text-wrapper">
      <div className="marquee-content">
        <h6>
          Reach out today and let&apos;s discuss how I can help you achieve your
          goals. Whether you need a stunning website, compelling graphic design,
          or any other digital solution, I&apos;m here to assist you.
        </h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904"
            alt="whatsapp icon"
            className="h-4 w-4"
            width={5}
            height={5}
          />{" "}
          Whats App: (+63)962 351 3976
        </h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/G-icon-mail.png/640px-G-icon-mail.png"
            alt="business icon"
            className="h-4 w-4"
            height={5}
            width={5}
          />{" "}
          Email Address: jrkm@jerickmalungcut.com
        </h6>
        <h6 className="flex items-center gap-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/640px-Gmail_Icon_%282013-2020%29.svg.png"
            alt="gmail icon"
            className="h-3 w-4"
            width={5}
            height={3}
          />
          Gmail: jerickmalungcutdev@gmail.com
        </h6>
        <h6>
          Reach out today and let&apos;s discuss how I can help you achieve your
          goals. Whether you need a stunning website, compelling graphic design,
          or any other digital solution, I&apos;m here to assist you.
        </h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904"
            alt="whatsapp icon"
            className="h-4 w-4"
            width={5}
            height={5}
          />{" "}
          Whats App: (+63)962 351 3976
        </h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/G-icon-mail.png/640px-G-icon-mail.png"
            alt="business icon"
            className="h-4 w-4"
            height={5}
            width={5}
          />{" "}
          Email Address: jrkm@jerickmalungcut.com
        </h6>
        <h6 className="flex items-center gap-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/640px-Gmail_Icon_%282013-2020%29.svg.png"
            alt="gmail icon"
            className="h-3 w-4"
            width={5}
            height={3}
          />
          Gmail: jerickmalungcutdev@gmail.com
        </h6>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
