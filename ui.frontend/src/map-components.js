import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import CustomClasses from './components/CustomClasses/CustomClasses'

// components to the challenge
import ActionButton from './components/Button/ActionButton'
import TextTitle from './components/TextTitle/TextTitle'
import Input from './components/Input/Input'
import Footer from './components/Footer/Footer'
import BannerContainer from './components/BannerContainer/BannerContainer'

import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

// CustomClasses Component Mapping
MapTo('vue/components/custom-classes')(CustomClasses, EditConfig)

// NotFound Component Mapping
MapTo('vue/components/button')(ActionButton)
MapTo('vue/components/text-title')(TextTitle)
MapTo('vue/components/input')(Input)
MapTo('vue/components/footer')(Footer)
MapTo('vue/components/banner-container')(BannerContainer)
