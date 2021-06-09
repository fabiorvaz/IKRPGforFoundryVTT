export default class IkrpgItemSheet extends ItemSheet {
  get template() {
    const path = "systems/ikrpg/templates/sheets/item";
    return `${path}/${this.item.data.type}-sheet.html`;
  }

  getData() 
  {
    const data = super.getData();
    data.config = CONFIG.ikrpg;
    return data;
  }
}