import { ThemedText } from "@/components/common/themed-text";
import { ThemedView } from "@/components/common/themed-view";

export default function Home() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
    </ThemedView>
  );
}
