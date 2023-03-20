<script>
  import { Grid, Row, Column, Modal } from "carbon-components-svelte";
  import { lessExperienceTools } from "../../assets/db";
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

<h3>Technologies I have used</h3>
<Grid>
  <Row style="display:flex; justify-content: center; text-align: justify">
    <Column sm={4} md={8} lg={8} xlg={8} max={8}>
      <p>
        {lessExperienceTools.description}
      </p>
    </Column>
  </Row>
  <Row noGutter={true} style="display:flex; justify-content: center;">
    {#each lessExperienceTools.tools as tool}
      <Column sm={2} md={2} lg={3} xlg={3} max={3}>
        <div class="card">
          <img
            style="width:90%;"
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
  <p style="text-align:justify">
    {toolDescriptionMsg}
  </p>
</Modal>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    padding-bottom: 0;
  }
</style>
