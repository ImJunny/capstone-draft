import { StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Ref, useMemo } from "react";
import Text from "@/components/ui/Text";

type ExploreFilterSheetProps = {
  filterRef: Ref<BottomSheetModal>;
};

export default function ExploreFilterSheet({
  filterRef,
}: ExploreFilterSheetProps) {
  const snapPoints = useMemo(() => ["80%"], []);

  return (
    <BottomSheetModal ref={filterRef} snapPoints={snapPoints}>
      <BottomSheetView>
        <Text>Bottom Sheet</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  filterBtn: {
    marginLeft: 12,
    borderRadius: 24,
  },
});
