import ExploreCategories from "@/components/explore/ExploreCategories";
import ExploreJobSuggestions, {
  TypePost,
} from "@/components/explore/ExploreJobSuggestions";
import ExploreUserSuggestions, {
  TypeUser,
} from "@/components/explore/ExploreUserSuggestions";
import { ScrollView, StyleSheet } from "react-native";

// define categories here to be passed as props
const categories = [
  { name: "Tech" },
  { name: "Home" },
  { name: "Art" },
  { name: "Food" },
  { name: "Fashion" },
  { name: "Music" },
  { name: "Other" },
];

export const jobSuggestions: TypePost[] = [
  {
    id: 1,
    title: "Lawn Mowing",
    description: "This is a description of the lawn mowing job.",
    rate: 80,
    tags: ["home", "local"],
  },
  {
    id: 2,
    title: "Building Meural",
    description: "This is a description of lorem ipsum.",
    rate: 35,
    tags: ["art", "local", "ammenities"],
  },
  {
    id: 3,
    title: "Simple Static Website Needed",
    description: "This is a description of lorem ipsum.",
    rate: 24,
    tags: ["tech", "remote"],
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    description: "This is a description of lorem ipsum.",
    rate: 120,
    tags: ["tech", "remote"],
  },
  {
    id: 5,
    title: "Lorem Ipsum",
    description: "This is a description of lorem ipsum.",
    rate: 60,
    tags: ["tech", "remote"],
  },
];

const userSuggestions: TypeUser[] = [
  {
    id: 1,
    name: "John Smith",
    biography: "This is the biography of the user.",
  },
  {
    id: 2,
    name: "John Smith",
    biography: "This is the biography of the user.",
  },
  {
    id: 3,
    name: "John Smith",
    biography: "This is the biography of the user.",
  },
];

export default function ExplorePage() {
  return (
    <ScrollView>
      <ExploreCategories data={categories} />
      <ExploreJobSuggestions data={jobSuggestions} />
      <ExploreUserSuggestions data={userSuggestions} />
    </ScrollView>
  );
}
