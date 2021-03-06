import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<
  Pick<TextFieldProps, 'disabled'> & { error?: boolean }
>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error(theme)}
  `}
`

export const InputWrapper = styled.div<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    height: 4.5rem;
    flex-direction: ${iconPosition === 'left' ? 'row' : 'row-reverse'};
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.25rem;
    color: ${theme.colors.gray};
    svg {
      width: 100%;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: red;
    font-size: ${theme.font.sizes.xsmall};
  `}
`
