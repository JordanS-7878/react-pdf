import { Text, View } from "@react-pdf/renderer";
import { styles } from "./PdfViewer";

function ApprovalRecordSection() {
	return (
		<View
			style={[styles.section, styles.tableFontSize, styles.tableBorderRight]}
		>
			<Text style={[styles.tableHeader]}>Approval Record</Text>
			<View style={[styles.tableRow]}>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 1 }]}
				>
					Submitted by
				</Text>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 2 }]}
				>
					Mary Tasha
				</Text>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 1 }]}
				>
					Authorised by
				</Text>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 2 }]}
				>
					Kim Myung Soo
				</Text>
			</View>
			<View style={[styles.tableRow]}>
				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 1 }]}
				>
					Signature
				</Text>
				<View
					style={[
						styles.tableCell,
						styles.tableRow,
						styles.tableBorderLeftBottom,
						{ flex: 2, gap: 4 },
					]}
				>
					<Text style={[{ flex: 1 }]}>Mary Tasha</Text>
					<Text style={[{ flex: 2 }]}>
						Digitally signed by Mary Tasha Umang on 23 Feb 2024 12:32:11 UTC
					</Text>
				</View>

				<Text
					style={[styles.tableCell, styles.tableBorderLeftBottom, { flex: 1 }]}
				>
					Signature
				</Text>
				<View
					style={[
						styles.tableCell,
						styles.tableRow,
						styles.tableBorderLeftBottom,
						{ flex: 2, gap: 4 },
					]}
				>
					<Text style={[{ flex: 1 }]}>Kim Myung Soo</Text>
					<Text style={[{ flex: 2 }]}>
						Digitally signed by Kim Myung Soo on 28 Feb 2024 22:32:11 UTC
					</Text>
				</View>
			</View>
		</View>
	);
}

export default ApprovalRecordSection;
