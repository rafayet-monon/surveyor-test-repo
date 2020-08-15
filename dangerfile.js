import {message, danger} from "danger"
import eslint from 'danger-plugin-eslint'
import stylelint from 'danger-plugin-stylelint'
import jest from 'danger-plugin-jest'

jest()
eslint()
stylelint()
