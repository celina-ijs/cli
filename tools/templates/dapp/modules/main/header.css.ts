import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export default Styles.style({
  backgroundColor: Theme.background.default,
  $nest: {
    '::-webkit-scrollbar-track': {
      borderRadius: '12px',
      border: '1px solid transparent',
      backgroundColor: 'unset'
    },
    '::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: 'unset'
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.2) 0% 0% no-repeat padding-box'
    },
    '.btn-network:hover': {
      backgroundColor: '#101026',
      border: '1px solid #101026'
    },
    '.os-modal': {
      boxSizing: 'border-box',
      $nest: {
        '.i-modal_header': {
          borderRadius: '10px 10px 0 0',
          background: 'unset',
          borderBottom: `2px solid ${Theme.divider}`,
          padding: '1rem',
          fontWeight: 700,
          fontSize: '1rem'
        },
        '.list-view': {
          $nest: {
            '.list-item:hover': {
              $nest: {
                '> *': {
                  opacity: 1
                }
              }
            },
            '.list-item': {
              cursor: 'pointer',
              transition: 'all .3s ease-in',
              $nest: {
                '&.disabled-network-selection': {
                  cursor: 'default',
                  $nest: {
                    '&:hover > *': {
                      opacity: '0.5 !important',
                    }
                  }
                },
                '> *': {
                  opacity: .5
                }
              }
            },
            '.list-item.is-actived': {
              $nest: {
                '> *': {
                  opacity: 1
                },
                '&:after': {
                  content: "''",
                  top: '50%',
                  left: 12,
                  position: 'absolute',
                  background: '#20bf55',
                  borderRadius: '50%',
                  width: 10,
                  height: 10,
                  transform: 'translate3d(-50%,-50%,0)'
                }
              }
            }
          }
        }
      }
    }
  }
})
