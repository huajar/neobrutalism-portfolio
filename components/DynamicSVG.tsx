"use client";
import { useTheme } from "next-themes";

const DynamicSVG = () => {
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#000000" : "#FD9745";

return (
    <svg
        width="50"
        height="50"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Abstract Design" clipPath="url(#clip0_82_532)">
            <g id="Group">
                <path
                    d="M0 24.9957L24.9957 0H49.9914V24.9957L24.9957 49.9914H0V24.9957Z"
                    fill={fillColor}
                />
                <path
                    d="M49.9918 0H24.9961V24.9957H49.9918V0Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_2">
                <path
                    d="M0 75.0041L24.9957 49.9912H49.9914V75.0041L24.9957 99.9998H0V75.0041Z"
                    fill={fillColor}
                />
                <path
                    d="M49.9918 49.9912H24.9961V74.9869H49.9918V49.9912Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_3">
                <path
                    d="M0 124.996L24.9957 100H49.9914V124.996L24.9957 149.991H0V124.996Z"
                    fill={fillColor}
                />
                <path
                    d="M49.9918 100H24.9961V124.996H49.9918V100Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_4">
                <path
                    d="M0 174.987L24.9957 149.991H49.9914V174.987L24.9957 200H0V174.987Z"
                    fill={fillColor}
                />
                <path
                    d="M49.9918 149.991H24.9961V174.987H49.9918V149.991Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_5">
                <path
                    d="M49.9912 24.9957L75.0041 0H99.9998V24.9957L75.0041 49.9914H49.9912V24.9957Z"
                    fill={fillColor}
                />
                <path
                    d="M99.9996 0H75.0039V24.9957H99.9996V0Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_6">
                <path
                    d="M49.9912 75.0041L75.0041 49.9912H99.9998V75.0041L75.0041 99.9998H49.9912V75.0041Z"
                    fill={fillColor}
                />
                <path
                    d="M99.9996 49.9912H75.0039V74.9869H99.9996V49.9912Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_7">
                <path
                    d="M49.9912 124.996L75.0041 100H99.9998V124.996L75.0041 149.991H49.9912V124.996Z"
                    fill={fillColor}
                />
                <path
                    d="M99.9996 100H75.0039V124.996H99.9996V100Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_8">
                <path
                    d="M100 24.9957L124.996 0H149.991V24.9957L124.996 49.9914H100V24.9957Z"
                    fill={fillColor}
                />
                <path
                    d="M149.992 0H124.996V24.9957H149.992V0Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_9">
                <path
                    d="M149.991 24.9957L174.987 0H200V24.9957L174.987 49.9914H149.991V24.9957Z"
                    fill={fillColor}
                />
                <path
                    d="M199.983 0H174.987V24.9957H199.983V0Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
            <g id="Group_10">
                <path
                    d="M100 75.0041L124.996 49.9912H149.991V75.0041L124.996 99.9998H100V75.0041Z"
                    fill={fillColor}
                />
                <path
                    d="M149.992 49.9912H124.996V74.9869H149.992V49.9912Z"
                    fill={theme === "dark" ? "#ffffff" : "#262626"}
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_82_532">
                <rect width="200" height="200" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
};

export default DynamicSVG;
