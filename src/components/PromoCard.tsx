import { Button } from "@mui/material";

const PromoCard = () => {
  return (
    <div
      className="relative w-full h-52 rounded-xl text-white flex items-center px-6"
      style={{
        backgroundImage: `url('/src/assets/images/promo-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text Content (Left-aligned, Centered Vertically) */}
      <div className="w-2/3">
        <h2 className="text-lg font-semibold leading-tight">
          Open a new <br /> account at <span className="text-purple-400">Xai.com!</span>
        </h2>

        {/* Button with Padding on Top for More Space */}
        <div className="pt-6">
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            endIcon={<span>→</span>}
          >
            Increase your plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
