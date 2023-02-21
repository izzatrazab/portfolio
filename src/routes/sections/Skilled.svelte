<script>
  import { Grid, Row, Column, Modal } from "carbon-components-svelte";
  import { db } from "../../assets/db";
  let isToolDescriptionOpen = false;
  let toolName = "";
  let toolDescriptionMsg = "";

  const openToolDescription = (
    /** @type {string} */ msg,
    /** @type {string} */ name
  ) => {
    toolDescriptionMsg = msg;
    toolName = name;
    isToolDescriptionOpen = true;
  };
</script>

<h3>Skills</h3>
<Grid>
  <Row>
    <Column>
      <p>
        These are the framework/database that I'm confident with. As far afs I
        remember, I used them the longest if compared to others.
      </p>
    </Column>
  </Row>
  <Row noGutter={true} style="display:flex; justify-content: center;">
    {#each db.confidentTools as tool}
      <Column sm={2} md={2} lg={3} xlg={3} max={3}>
        <div class="card">
          <img
            style="width:90%; 
            cursor: pointer;"
            src={tool.logo}
            alt={tool.name}
            on:click={() => openToolDescription(tool.description, tool.name)}
            on:keyup
          />
        </div>
        <p>{tool.name}</p>
      </Column>
    {/each}
  </Row>
</Grid>
<Modal
  bind:open={isToolDescriptionOpen}
  passiveModal
  modalHeading={toolName}
  size="xs"
  on:close={() => ((toolDescriptionMsg = ""), (toolName = ""))}
>
  {toolDescriptionMsg}
</Modal>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    padding-bottom: 0;
    position: relative;
  }
  /* #toolDescription {
  } */
</style>
