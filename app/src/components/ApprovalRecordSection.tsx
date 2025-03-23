import { StyleSheet, Text, View } from "@react-pdf/renderer";

function ApprovalRecordSection() {
	const styles = StyleSheet.create({
		section: {
			marginBottom: 20,
		},
		header: {
			fontSize: 12,
			fontWeight: "bold",
			padding: 4,
			backgroundColor: "#00003C",
			color: "#fff",
			width: "100%",
			border: "1px solid #00003C",
		},
		flexRow: {
			display: "flex",
			flexDirection: "row",
		},
		flexColumn: {
			display: "flex",
			flexDirection: "column",
		},
		cell: {
			fontSize: 10,
			border: "1px solid #000",
			padding: 8,
		},
	});

	return (
		<View style={[styles.section]}>
			<Text style={[styles.header]}>Approval Record</Text>
			<View style={[styles.flexRow, {}]}>
				<Text style={[styles.cell, { flex: 1 }]}>Submitted by</Text>
				<Text style={[styles.cell, { flex: 2 }]}>Mary Tasha</Text>
				<Text style={[styles.cell, { flex: 1 }]}>Authorised by</Text>
				<Text style={[styles.cell, { flex: 2 }]}>Kim Myung Soo</Text>
			</View>
			<View style={[styles.flexRow, {}]}>
				<Text style={[styles.cell, { flex: 1 }]}>Signature</Text>
				<View style={[styles.cell, styles.flexRow, { flex: 2, gap: 4 }]}>
					<Text style={[{ flex: 1, borderRight: "1px solid #000" }]}>
						Mary Tasha
					</Text>
					<Text style={[{ flex: 2 }]}>
						Digitally signed by Mary Tasha Umang on 23 Feb 2024 12:32:11 UTC
					</Text>
				</View>

				<Text style={[styles.cell, { flex: 1 }]}>Signature</Text>
				<View style={[styles.cell, styles.flexRow, { flex: 2, gap: 4 }]}>
					<Text style={[{ flex: 1, borderRight: "1px solid #000" }]}>
						Kim Myung Soo
					</Text>
					<Text style={[{ flex: 2 }]}>
						Digitally signed by Kim Myung Soo on 28 Feb 2024 22:32:11 UTC
					</Text>
				</View>
			</View>
		</View>
	);
}

export default ApprovalRecordSection;
