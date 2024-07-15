import "./index.css";

const InfiniteMarquee = () => {
  return (
    <div className="text-wrapper">
      <div className="marquee-content">
        <h6>Hello there! You can get in touch with me via</h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904"
            alt="whatsapp icon"
            className="h-6 w-6"
          />{" "}
          Whats App: +63916 920 8102
        </h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/G-icon-mail.png/640px-G-icon-mail.png"
            alt="business icon"
            className="h-6 w-6"
          />{" "}
          Business Email Address: jerickmalungcut@jrkm.com
        </h6>
        <h6 className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/640px-Gmail_Icon_%282013-2020%29.svg.png"
            alt="gmail icon"
            className="h-4 w-6"
          />
          Gmail Address: jerickmalungcutdev@gmail.com
        </h6>
        <h6>Hello there! You can get in touch with me via</h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904"
            alt="whatsapp icon"
            className="h-6 w-6"
          />{" "}
          Whats App: +63916 920 8102
        </h6>
        <h6 className="flex items-center gap-4">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/G-icon-mail.png/640px-G-icon-mail.png"
            alt="business icon"
            className="h-6 w-6"
          />{" "}
          Business Email Address: jerickmalungcut@jrkm.com
        </h6>
        <h6 className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/640px-Gmail_Icon_%282013-2020%29.svg.png"
            alt="gmail icon"
            className="h-4 w-6"
          />
          Gmail Address: jerickmalungcutdev@gmail.com
        </h6>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
