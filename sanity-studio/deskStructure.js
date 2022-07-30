// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = (listItem) =>
  !["service", "experience", "course", "testimonial"].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title("Content")
    .items([
      // Your custom list items go here

      // Followed by an array of all remaining document types defined in
      // schema.js, with the hidden ones filtered out
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
