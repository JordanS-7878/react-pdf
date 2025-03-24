import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./PdfViewer";

function ProjectDetailSection() {
	return (
		<View style={[styles.section, styles.tableFontSize]}>
			<Text style={[styles.tableHeader]}>Project Detail</Text>
			<View style={styles.tableRow}>
				<View style={[styles.tableColumn, { width: "80%" }]}>
					<View style={[styles.tableRow, { flex: 1 }]}>
						<Text
							style={[
								styles.tableCell,
								styles.tableBorderLeftBottom,
								{ flex: 1 },
							]}
						>
							Project title
						</Text>
						<Text
							style={[
								styles.tableCell,
								styles.tableBorderLeftBottom,
								{ flex: 1 },
							]}
						>
							Prinos
						</Text>
						<Text
							style={[
								styles.tableCell,
								styles.tableBorderLeftBottom,
								{ flex: 1 },
							]}
						>
							Owner/Operator
						</Text>
						<Text
							style={[
								styles.tableCell,
								styles.tableBorderLeftBottom,
								{ flex: 1 },
							]}
						>
							Energeon
						</Text>
					</View>
					<View style={[styles.tableRow, { flex: 1 }]}>
						<View style={[styles.tableColumn, { flex: 1 }]}>
							<View style={[styles.tableRow, { flex: 1 }]}>
								<Text
									style={[
										styles.tableCell,
										styles.tableBorderLeftBottom,
										{ flex: 1 },
									]}
								>
									Project code
								</Text>
								<Text
									style={[
										styles.tableCell,
										styles.tableBorderLeftBottom,
										{ flex: 1 },
									]}
								>
									WE24ENER001
								</Text>
							</View>
							<View style={[styles.tableRow, { flex: 1 }]}>
								<Text
									style={[
										styles.tableCell,
										styles.tableBorderLeftBottom,
										{ flex: 1 },
									]}
								>
									Period
								</Text>
								<Text
									style={[
										styles.tableCell,
										styles.tableBorderLeftBottom,
										{ flex: 1 },
									]}
								>
									February 2025
								</Text>
							</View>
						</View>
						<View style={[styles.tableRow, { flex: 1 }]}>
							<Text
								style={[
									styles.tableCell,
									styles.tableBorderLeftBottom,
									{ flex: 1 },
								]}
							>
								Location
							</Text>
							<Text
								style={[
									styles.tableCell,
									styles.tableBorderLeftBottom,
									{ flex: 1 },
								]}
							>
								Europe, Greece
							</Text>
						</View>
					</View>
				</View>
				<View
					style={[
						styles.tableCell,
						styles.tableQRCell,
						styles.tableBorderLeftBottom,
						styles.tableBorderRight,
						{ flex: 1 },
					]}
				>
					<Image src="src/assets/images/qr_img.png" style={styles.QRSize} />
					<Text>Click/Scan here to review data</Text>
				</View>
			</View>
		</View>
	);
}

export default ProjectDetailSection;
