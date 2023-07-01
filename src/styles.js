import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    marginTop: 25,
  },
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#D4D7ED",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#212121",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  listItem: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212121",
  },
  list: {
    gap: 15,
    paddingBottom: 10,
  },
  icon: {
    color: "red",
    fontSize: 16,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 16,
    color: "#212121",
  },
  nextEvents: {
    color: "#424D9E",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
  },
  selectedEvent: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
