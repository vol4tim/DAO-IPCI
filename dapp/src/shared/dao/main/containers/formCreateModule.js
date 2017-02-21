import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import i18next from 'i18next'
import { submitCreateModule } from '../../../../modules/dao/actions';
import Form from '../../../../shared/components/common/form';

function mapStateToProps(state, props) {
  if (props.module === 'core') {
    // return {
    //   fields: ['name', 'description'],
    //   selects: {},
    //   labels: ['Название DAO', 'Описание DAO'],
    //   placeholders: ['My DAO', 'description']
    // }
    return {
      fields: ['dao_name', 'dao_description', 'operator_nam'],
      labels: [i18next.t('dao:formCoreDaoName'), i18next.t('dao:formCoreDaoDescription'), i18next.t('dao:formCoreOperatorName')]
    }
  } else if (props.module === 'issuer') {
    return {
      fields: ['name', 'symbol', 'operator_core', 'group'],
      labels: [i18next.t('dao:formRegistryName'), i18next.t('dao:formRegistrySymbol'), i18next.t('dao:formIssuerOperatorCore'), i18next.t('dao:formIssuerGroup')],
      initialValues: { operator_core: state.dao.address },
      disableds: [false, false, true, false]
    }
  } else if (props.module === 'auditor') {
    return {
      fields: ['operator', 'token', 'holder'],
      labels: [i18next.t('dao:formAuditorOperator'), i18next.t('dao:formAuditorToken'), i18next.t('dao:formAuditorHolder')],
      autocomplete: {
        token: true,
        holder: true
      }
    }
  } else if (props.module === 'complier') {
    return {
      fields: [],
      labels: []
    }
  } else if (props.module === 'market') {
    return {
      fields: [],
      selects: {},
      labels: [],
      placeholders: []
    }
  } else if (props.module === 'token') {
    return {
      fields: ['name', 'symbol', 'decimals', 'start_count'],
      selects: {},
      labels: [i18next.t('dao:formTokenName'), i18next.t('dao:formTokenSymbol'), i18next.t('dao:formTokenDecimals'), i18next.t('dao:formTokenStartCount')],
      placeholders: [i18next.t('dao:formTokenName'), 'S', 0, 0]
    }
  } else if (props.module === 'tokenAcl') {
    return {
      fields: ['name', 'symbol', 'decimals', 'start_count', 'acl', 'acl_group'],
      selects: {},
      labels: [i18next.t('dao:formTokenAclName'), i18next.t('dao:formTokenAclSymbol'), i18next.t('dao:formTokenAclDecimals'), i18next.t('dao:formTokenAclStartCount'), i18next.t('dao:formTokenAclAcl'), i18next.t('dao:formTokenAclAclGroup')],
      placeholders: [i18next.t('dao:formTokenAclName'), 'S', 0, 0, '0x111111111', 'name'],
      autocomplete: {
        acl: true
      }
    }
  } else if (props.module === 'acl' || props.module === 'docs') {
    return {
      fields: [],
      selects: {},
      labels: [],
      placeholders: []
    }
  }
  return {}
}
function mapDispatchToProps(dispatch, props) {
  return {
    onSubmit: bindActionCreators(form => submitCreateModule(form, props.module), dispatch)
  }
}
export default reduxForm({
  form: 'FormCreator'
}, mapStateToProps, mapDispatchToProps)(Form)
