import {RXElement} from "../rxelement"
import responsiveMeta from "../schemas/responsive-meta"
import colWidth from "../schemas/col-width"
import colOffset from "../schemas/col-offset"
import colAlignSelf from "../schemas/col-align-self"
import colOrder from "../schemas/col-order"

export class BSCol extends RXElement{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupGrid'
    this.toolboxInfo.elementId = 'column'
    this.toolboxInfo.elementName = "Column"
    this.className = 'BSCol'
    this.widthDropMargin = 15;
    this.acceptedChildren=['BSRow','BSContainer', 'HTMLDiv']

    //this.$meta.baseClass = ['col'] 
    this.$meta.width = responsiveMeta
    this.$meta.width.md = 'col-md'

    this.$meta.offset = responsiveMeta

    this.$meta.alignSelf = responsiveMeta

    this.$meta.order = responsiveMeta


    this.$schema.groups = {
      'columnOptions':{
        label:'Column Options'
      }
    }

    this.$schema.fields.width = colWidth

    this.$schema.fields.offset = colOffset

    this.$schema.fields.alignSelf = colAlignSelf

    this.$schema.fields.order = colOrder

    super.addMarginAuto()
    super.addMarginAll()
    super.addMarginH()
    super.addMarginV()
  }

  make(){
    return new BSCol
  }

  clone(){
    let copy = super.clone()
    super.copyMetaTo(this.$meta.width, copy.$meta.width)
    super.copyMetaTo(this.$meta.offset, copy.$meta.offset)
    super.copyMetaTo(this.$meta.alignSelf, copy.$meta.alignSelf)
    super.copyMetaTo(this.$meta.order, copy.$meta.order)

    return copy
  }

  toViewModel(){
    let model = super.toViewModel()
    model.label.text = "Column"

    super.metaFieldToViewModel(model, 'width')
    super.metaFieldToViewModel(model, 'offset')
    super.metaFieldToViewModel(model, 'alignSelf')
    super.metaFieldToViewModel(model, 'order')

    return model
  }
}
