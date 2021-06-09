export default class IkrpgActorsSheet extends ActorSheet {
    get template() {
      const path = "systems/ikrpg/templates/sheets/actor";
      return `${path}/${this.actor.data.type}-sheet.html`;
    }
  
    getData() 
    {
      const data = super.getData();
      console.log(data);
      data.skill_list=[];

      let previousSpec = '';
      for (const skill of data.items) {
        data.skill_list.push(skill);
      }
      return data;
    }

    activateListeners(html)
    {
      html.find(".inline-edit").change(this._onSkillEdit.bind(this));
      html.find(".item-delete").click(this._onItemDelete.bind(this));

      super.activateListeners(html);
    }
    _onItemDelete(event)
    {
      event.preventDefault();
      let element = event.currentTarget;
      let itemId = element.closest(".item").dataset.itemId;

      console.log("deletando");
      console.log(itemId);

      return this.actor.deleteOwnedItem(itemId);
    }

    _onSkillEdit(event)
    {
      event.preventDefault();
      let element = event.currentTarget;
      let itemId = element.closest(".item").dataset.itemId;
      let item =this.actor.getOwnedItem(itemId);
      let field = element.dataset.field;
      return item.update({[field]: element.value});
    }
  }