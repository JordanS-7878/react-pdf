import { Path, Svg } from "@react-pdf/renderer";
import { IconDefinition } from "@ant-design/icons-svg/lib/types";
import { Style } from "@react-pdf/types";

interface ReactPdfAntdIconProps {
	antIcon: IconDefinition;
	style?: Style;
}

function ReactPdfAntdIcon({ antIcon: {}, style = {} }: ReactPdfAntdIconProps) {
	const color = style.color || "black";
	return <Svg></Svg>;
}

export default ReactPdfAntdIcon;
