import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TXNS from "./transactions.json";
import Ionicons from "@expo/vector-icons/Ionicons";

const Transactions = ({ transactions }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(TXNS);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        {transactions === "all" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              margin: 10,
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ color: "white" }}> {item?.date} </Text>
              <Text style={{ color: "white" }}>
                {" "}
                {item?.location?.address}{" "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              {item?.txnType == "credit" && (
                <Ionicons
                  style={{
                    alignSelf: "center",
                  }}
                  name="arrow-up"
                  size={22}
                  color="green"
                />
              )}
              {item?.txnType == "debit" && (
                <Ionicons
                  style={{
                    alignSelf: "center",
                  }}
                  name="md-arrow-down"
                  size={22}
                  color="red"
                />
              )}
              <Text style={{ color: "white" }}> {item?.amount} </Text>
            </View>
          </View>
        )}
        {transactions === "credit" && item?.txnType == "credit" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              margin: 10,
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ color: "white" }}> {item?.date} </Text>
              <Text style={{ color: "white" }}>{item?.location?.address}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              {item?.txnType == "credit" && (
                <Ionicons
                  style={{
                    alignSelf: "center",
                  }}
                  name="arrow-up"
                  size={22}
                  color="green"
                />
              )}
              {/* {item?.txnType == "debit" && (
                <Ionicons
                  style={{
                    alignSelf: "center",
                  }}
                  name="md-arrow-down"
                  size={22}
                  color="red"
                />
              )} */}
              <Text style={{ color: "white" }}> {item?.amount} </Text>
            </View>
          </View>
        )}
        {transactions === "debit" && item?.txnType == "debit" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              margin: 10,
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ color: "white" }}> {item?.date} </Text>
              <Text style={{ color: "white" }}>{item?.location?.address}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              {/* {item?.txnType == "debit" && (
                <Ionicons
                  style={{
                    alignSelf: "center",
                  }}
                  name="arrow-up"
                  size={22}
                  color="green"
                />
              )} */}
              {item?.txnType == "debit" && (
                <Ionicons
                  style={{
                    alignSelf: "center",
                  }}
                  name="md-arrow-down"
                  size={22}
                  color="red"
                />
              )}
              <Text style={{ color: "white" }}> {item?.amount} </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Transactions;

const styles = StyleSheet.create({});
