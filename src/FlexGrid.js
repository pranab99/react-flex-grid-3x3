import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  rootColumn: {
    display: "flex",
    flexDirection: "column",
  },
  rootRow: {
    display: "flex",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  rowInColumn: {
    display: "flex",
    flexShrink: "0",
  },
  row: {
    display: "flex",
    flexGrow: 1,
  },
});

function renderElement(data, getComponent, classes, spacing, theme) {
  const layoutType = data.alignment === "horizontal" ? "row" : "column";
  return (
    <div
      className={(() => {
        if (layoutType === "row") {
          if (data.root) {
            return classes.rootRow;
          }
          return classes.row;
        }
        if (data.root) {
          return classes.rootColumn;
        }
        return classes.column;
      })()}
      style={{
        height: data.height,
        width: data.width,
      }}
    >
      {data.content.map((cardData) =>
        !cardData.content ? (
          <div
            className={classes.rowInColumn}
            style={{
              boxSizing: "border-box",
              height: cardData.height,
              width: cardData.width,
              padding: `${spacing}px`,
            }}
          >
            {cardData.component ? getComponent(cardData.component) : ""}
          </div>
        ) : (
          renderElement(cardData, getComponent, classes, spacing, theme)
        )
      )}
    </div>
  );
}
function FlexGrid(props) {
  const { classes, getComponent, layoutConfiguration } = props;

  const { spacing } = layoutConfiguration;

  return renderElement(layoutConfiguration, getComponent, classes, spacing);
}

export default withStyles(styles, { withTheme: true })(FlexGrid);
