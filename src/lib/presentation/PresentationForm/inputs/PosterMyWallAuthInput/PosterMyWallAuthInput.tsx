import * as React from 'react';
import withStyles, {
  createStyles,
  WithStyles,
} from '../../../../core/withStyles';
import createTheme from '../../../../theme/createTheme';
import OAuthInput, { OAuthInputProps } from '../OAuthInput';

interface PosterMyWallAuthInputProps
  extends OAuthInputProps,
    WithStyles<typeof styles> {}

const styles = createStyles({
  icon: {
    color: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 6,
    bottom: 0,
    height: '100%',
    width: 24,
    display: 'flex',
    alignItems: 'center',
    backgroundImage:
      'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTUwMTcgMTAuMkM1LjEwMDE3IDEwLjEyNSA1LjIyNTE3IDEwLjAxNSA1LjMzNTE3IDkuODc1QzUuNDQwMTcgOS43MyA1LjUyNTE3IDkuNTUgNS41ODAxNyA5LjMzNUM1LjY0MDE3IDkuMTIgNS42NzAxNyA4Ljg3IDUuNjcwMTcgOC41ODVDNS42NzAxNyA4LjA0NSA1LjU2NTE3IDcuNjMgNS4zNjAxNyA3LjM1NUM1LjE1NTE3IDcuMDggNC44NjAxNyA2Ljk0IDQuNDgwMTcgNi45NEMzLjk4NTE3IDYuOTQgMy41NTAxNyA3LjIwNSAzLjE3MDE3IDcuNzRWOS43M0MzLjU0MDE3IDEwLjEyIDMuOTY1MTcgMTAuMzE1IDQuNDQ1MTcgMTAuMzE1QzQuNjM1MTcgMTAuMzEgNC44MDUxNyAxMC4yNzUgNC45NTAxNyAxMC4yWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE3Ljk3NDggNy4yNzVDMTcuNzM0OCA3LjA1IDE3LjQzNDggNi45MzUgMTcuMDc5OCA2LjkzNUMxNi45MDQ4IDYuOTM1IDE2LjczOTggNi45NiAxNi41ODk4IDcuMDE1QzE2LjQzOTggNy4wNyAxNi4zMDQ4IDcuMTU1IDE2LjE4NDggNy4yN0MxNi4wNjQ4IDcuMzg1IDE1Ljk2OTggNy41MjUgMTUuODg0OCA3LjY5NUMxNS44MDQ4IDcuODY1IDE1Ljc0NDggOC4wNyAxNS43MTQ4IDguM0gxOC40Mzk4QzE4LjM2OTggNy44NDUgMTguMjE0OCA3LjUgMTcuOTc0OCA3LjI3NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNi43MjUgMTUuMzg1QzE2LjQ1NSAxNS41NCAxNi4zMjUgMTUuNzY1IDE2LjMyNSAxNi4wNTVDMTYuMzI1IDE2LjI3IDE2LjQxIDE2LjQ0IDE2LjU4IDE2LjU2QzE2Ljc1IDE2LjY4IDE2Ljk4IDE2Ljc0IDE3LjI3NSAxNi43NEMxNy40MDUgMTYuNzQgMTcuNTI1IDE2LjcyIDE3LjY1IDE2LjY4QzE3Ljc3IDE2LjY0IDE3Ljg4NSAxNi41OSAxNy45OSAxNi41MjVDMTguMDk1IDE2LjQ2IDE4LjE5NSAxNi4zOTUgMTguMjg1IDE2LjMxNUMxOC4zNzUgMTYuMjQgMTguNDUgMTYuMTY1IDE4LjUyIDE2LjA5VjE1LjE0SDE3Ljk1QzE3LjM5NSAxNS4xNDUgMTYuOTkgMTUuMjI1IDE2LjcyNSAxNS4zODVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNy4xNzAxNyA5Ljg4NUM3LjI5MDE3IDEwLjAzIDcuNDM1MTcgMTAuMTM1IDcuNjAwMTcgMTAuMjA1QzcuNzY1MTcgMTAuMjc1IDcuOTU1MTcgMTAuMzEgOC4xNjAxNyAxMC4zMUM4LjM2NTE3IDEwLjMxIDguNTQ1MTcgMTAuMjc1IDguNzE1MTcgMTAuMjA1QzguODgwMTcgMTAuMTM1IDkuMDI1MTcgMTAuMDMgOS4xNDUxNyA5Ljg4NUM5LjI2NTE3IDkuNzQgOS4zNjAxNyA5LjU2NSA5LjQyNTE3IDkuMzU1QzkuNDkwMTcgOS4xNDUgOS41MjUxNyA4Ljg5NSA5LjUyNTE3IDguNjE1QzkuNTI1MTcgOC4zMzUgOS40OTAxNyA4LjA5IDkuNDI1MTcgNy44OEM5LjM2MDE3IDcuNjcgOS4yNjUxNyA3LjQ5NSA5LjE0NTE3IDcuMzU1QzkuMDI1MTcgNy4yMTUgOC44ODAxNyA3LjExIDguNzE1MTcgNy4wNEM4LjU1MDE3IDYuOTcgOC4zNjUxNyA2LjkzNSA4LjE2MDE3IDYuOTM1QzcuOTU1MTcgNi45MzUgNy43NjUxNyA2Ljk3IDcuNjAwMTcgNy4wNEM3LjQzNTE3IDcuMTEgNy4yOTAxNyA3LjIxNSA3LjE3MDE3IDcuMzU1QzcuMDUwMTcgNy40OTUgNi45NTUxNyA3LjY3IDYuODkwMTcgNy44OEM2LjgyNTE3IDguMDkgNi43OTUxNyA4LjMzNSA2Ljc5NTE3IDguNjE1QzYuNzk1MTcgOC44OTUgNi44MjUxNyA5LjE0NSA2Ljg5MDE3IDkuMzU1QzYuOTU1MTcgOS41NjUgNy4wNTAxNyA5Ljc0IDcuMTcwMTcgOS44ODVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjMuMiAwSDAuOEMwLjM2IDAgMCAwLjM2IDAgMC44VjIzLjJDMCAyMy42NCAwLjM2IDI0IDAuOCAyNEgyMy4yQzIzLjY0IDI0IDI0IDIzLjY0IDI0IDIzLjJWMC44QzI0IDAuMzYgMjMuNjQgMCAyMy4yIDBaTTE1LjQzIDcuNzRDMTUuNTE1IDcuNDggMTUuNjQgNy4yNiAxNS43OTUgNy4wOEMxNS45NSA2LjkgMTYuMTQgNi43NiAxNi4zNTUgNi42NjVDMTYuNTcgNi41NyAxNi44MSA2LjUyIDE3LjA3NSA2LjUyQzE3LjM0NSA2LjUyIDE3LjU5IDYuNTY1IDE3LjgxIDYuNjY1QzE4LjAzIDYuNzYgMTguMjE1IDYuOSAxOC4zNyA3LjA4QzE4LjUyNSA3LjI2IDE4LjY0IDcuNDggMTguNzI1IDcuNzRDMTguODA1IDggMTguODUgOC4yOSAxOC44NSA4LjYyVjguNzE1SDE1LjcxQzE1LjczIDguOTg1IDE1Ljc4IDkuMjIgMTUuODYgOS40MkMxNS45NCA5LjYyIDE2LjA0NSA5Ljc4NSAxNi4xNyA5LjkxNUMxNi4yOTUgMTAuMDQ1IDE2LjQ0NSAxMC4xNDUgMTYuNjEgMTAuMjFDMTYuNzc1IDEwLjI3NSAxNi45NiAxMC4zMSAxNy4xNTUgMTAuMzFDMTcuMjk1IDEwLjMxIDE3LjQzIDEwLjI5NSAxNy41NjUgMTAuMjZDMTcuNzA1IDEwLjIzIDE3LjgzIDEwLjE4IDE3Ljk0IDEwLjExNUMxOC4wNSAxMC4wNSAxOC4xNDUgOS45NyAxOC4yMiA5Ljg3NUMxOC4yOTUgOS43OCAxOC4zNCA5LjY3IDE4LjM1NSA5LjU0NUgxOC43NkMxOC43MjUgOS43MzUgMTguNjU1IDkuOSAxOC41NiAxMC4wNDVDMTguNDY1IDEwLjE5IDE4LjM0NSAxMC4zMTUgMTguMjA1IDEwLjQxNUMxOC4wNjUgMTAuNTE1IDE3LjkwNSAxMC41OSAxNy43MjUgMTAuNjQ1QzE3LjU0NSAxMC42OTUgMTcuMzU1IDEwLjcyIDE3LjE1NSAxMC43MkMxNi44NzUgMTAuNzIgMTYuNjI1IDEwLjY3NSAxNi40IDEwLjU4QzE2LjE3NSAxMC40ODUgMTUuOTggMTAuMzUgMTUuODE1IDEwLjE3QzE1LjY1IDkuOTkgMTUuNTI1IDkuNzcgMTUuNDM1IDkuNTFDMTUuMzQ1IDkuMjUgMTUuMyA4Ljk1IDE1LjMgOC42MkMxNS4zIDguMjkgMTUuMzQ1IDggMTUuNDMgNy43NFpNMTMuNTE1IDYuNjI1SDE0LjAyNVY1LjU4SDE0LjQzNVY2LjYyNUgxNS4wOVY3LjAzNUgxNC40MzVWOS41MTVDMTQuNDM1IDkuNjggMTQuNDQ1IDkuODEgMTQuNDcgOS45MUMxNC40OTUgMTAuMDEgMTQuNTMgMTAuMDg1IDE0LjU4IDEwLjEzNUMxNC42MyAxMC4xOSAxNC42ODUgMTAuMjI1IDE0Ljc2IDEwLjI0QzE0LjgzIDEwLjI1NSAxNC45MSAxMC4yNjUgMTUgMTAuMjY1SDE1LjA5NUMxNS4xMjUgMTAuMjY1IDE1LjE1NSAxMC4yNjUgMTUuMTkgMTAuMjZWMTAuNjU1QzE1LjEzIDEwLjY2IDE1LjA3NSAxMC42NjUgMTUuMDE1IDEwLjY3QzE0Ljk1NSAxMC42NzUgMTQuOSAxMC42NzUgMTQuODQgMTAuNjc1QzE0LjY2IDEwLjY3NSAxNC41MiAxMC42NSAxNC40MSAxMC42QzE0LjMgMTAuNTUgMTQuMjIgMTAuNDc1IDE0LjE2NSAxMC4zNzVDMTQuMTEgMTAuMjc1IDE0LjA3IDEwLjE1IDE0LjA1NSAxMEMxNC4wNCA5Ljg1IDE0LjAzIDkuNjc1IDE0LjAzIDkuNDc1VjcuMDM1SDEzLjUyVjYuNjI1SDEzLjUxNVpNMTIuODQgOS4yOEMxMi44MDUgOS4yMDUgMTIuNzQgOS4xMzUgMTIuNjQ1IDkuMDc1QzEyLjU1IDkuMDE1IDEyLjQyIDguOTU1IDEyLjI2IDguODk1QzEyLjA5NSA4Ljg0IDExLjg4NSA4Ljc4IDExLjYzNSA4LjcxQzExLjQyIDguNjU1IDExLjIyNSA4LjYgMTEuMDU1IDguNTRDMTAuODg1IDguNDggMTAuNzQ1IDguNDEgMTAuNjMgOC4zMjVDMTAuNTE1IDguMjQgMTAuNDMgOC4xMzUgMTAuMzcgOC4wMTVDMTAuMzEgNy44OTUgMTAuMjggNy43NCAxMC4yOCA3LjU2QzEwLjI4IDcuNCAxMC4zMTUgNy4yNiAxMC4zOCA3LjEzQzEwLjQ0NSA3IDEwLjU0IDYuODkgMTAuNjYgNi44QzEwLjc4IDYuNzEgMTAuOTI1IDYuNjQ1IDExLjEgNi41OTVDMTEuMjcgNi41NSAxMS40NiA2LjUyNSAxMS42NyA2LjUyNUMxMi4xNDUgNi41MjUgMTIuNTA1IDYuNjA1IDEyLjc1IDYuNzY1QzEyLjk5NSA2LjkyNSAxMy4xMzUgNy4xNzUgMTMuMTYgNy41MkgxMi43NEMxMi43MTUgNy4zMiAxMi42MTUgNy4xNzUgMTIuNDU1IDcuMDhDMTIuMjkgNi45ODUgMTIuMDUgNi45NCAxMS43MjUgNi45NEMxMS41NzUgNi45NCAxMS40MzUgNi45NTUgMTEuMzEgNi45OEMxMS4xODUgNy4wMDUgMTEuMDc1IDcuMDUgMTAuOTg1IDcuMUMxMC44OTUgNy4xNSAxMC44MiA3LjIyIDEwLjc3IDcuM0MxMC43MiA3LjM4IDEwLjY5NSA3LjQ3IDEwLjY5NSA3LjU3NUMxMC42OTUgNy42MzUgMTAuNzA1IDcuNjk1IDEwLjcyNSA3Ljc1NUMxMC43NDUgNy44MTUgMTAuOCA3Ljg4IDEwLjg4IDcuOTQ1QzEwLjk2NSA4LjAxIDExLjA5IDguMDc1IDExLjI2IDguMTQ1QzExLjQzIDguMjEgMTEuNjYgOC4yOCAxMS45NSA4LjM1NUMxMi4xOCA4LjQxNSAxMi4zOCA4LjQ3NSAxMi41NSA4LjU0QzEyLjcyIDguNjA1IDEyLjg2IDguNjggMTIuOTcgOC43NjVDMTMuMDggOC44NTUgMTMuMTY1IDguOTU1IDEzLjIyIDkuMDdDMTMuMjc1IDkuMTg1IDEzLjMgOS4zMjUgMTMuMyA5LjQ4QzEzLjMgOS42NTUgMTMuMjY1IDkuODIgMTMuMTk1IDkuOTdDMTMuMTI1IDEwLjEyIDEzLjAyNSAxMC4yNTUgMTIuODk1IDEwLjM2NUMxMi43NjUgMTAuNDc1IDEyLjYxIDEwLjU2IDEyLjQyNSAxMC42MjVDMTIuMjQgMTAuNjkgMTIuMDMgMTAuNzIgMTEuOCAxMC43MkMxMC44MiAxMC43MiAxMC4yOSAxMC4zMjUgMTAuMiA5LjU0SDEwLjYyQzEwLjY1IDkuNzggMTAuNzYgOS45NyAxMC45NSAxMC4xMDVDMTEuMTQgMTAuMjQgMTEuNDI1IDEwLjMxIDExLjc5NSAxMC4zMUMxMS45OCAxMC4zMSAxMi4xMzUgMTAuMjkgMTIuMjc1IDEwLjI1QzEyLjQxIDEwLjIxIDEyLjUyNSAxMC4xNTUgMTIuNjE1IDEwLjA5QzEyLjcwNSAxMC4wMjUgMTIuNzc1IDkuOTQ1IDEyLjgyIDkuODVDMTIuODY1IDkuNzU1IDEyLjg4NSA5LjY1NSAxMi44ODUgOS41NUMxMi44OTUgOS40NDUgMTIuODc1IDkuMzU1IDEyLjg0IDkuMjhaTTYuNTA1IDcuNzNDNi41OSA3LjQ3IDYuNzEgNy4yNSA2Ljg2NSA3LjA3NUM3LjAyIDYuODk1IDcuMjA1IDYuNzYgNy40MjUgNi42NjVDNy42NDUgNi41NyA3Ljg5IDYuNTI1IDguMTU1IDYuNTI1QzguNDI1IDYuNTI1IDguNjcgNi41NyA4Ljg5IDYuNjY1QzkuMTEgNi43NiA5LjI5NSA2Ljg5NSA5LjQ1IDcuMDc1QzkuNjA1IDcuMjU1IDkuNzI1IDcuNDc1IDkuODA1IDcuNzM1QzkuODg1IDcuOTk1IDkuOTMgOC4yODUgOS45MyA4LjYxNUM5LjkzIDguOTUgOS44OSA5LjI0NSA5LjgwNSA5LjUwNUM5LjcyIDkuNzY1IDkuNiA5Ljk4NSA5LjQ0NSAxMC4xNjVDOS4yOSAxMC4zNDUgOS4xMDUgMTAuNDggOC44ODUgMTAuNTc1QzguNjY1IDEwLjY3IDguNDIgMTAuNzE1IDguMTU1IDEwLjcxNUM3Ljg5IDEwLjcxNSA3LjY0NSAxMC42NyA3LjQyNSAxMC41NzVDNy4yMDUgMTAuNDggNy4wMiAxMC4zNDUgNi44NjUgMTAuMTY1QzYuNzEgOS45ODUgNi41OSA5Ljc2NSA2LjUwNSA5LjVDNi40MiA5LjI0IDYuMzc1IDguOTQgNi4zNzUgOC42MDVDNi4zOCA4LjI4NSA2LjQyIDcuOTkgNi41MDUgNy43M1pNMi43NiA2LjYyNUgzLjE3VjcuMjE1QzMuMyA3LjA1NSAzLjQyNSA2LjkzIDMuNTUgNi44NEMzLjY3IDYuNzQ1IDMuNzkgNi42NzUgMy45MDUgNi42M0M0LjAyIDYuNTggNC4xMjUgNi41NSA0LjIzIDYuNTM1QzQuMzM1IDYuNTIgNC40MzUgNi41MTUgNC41MzUgNi41MTVDNC43OCA2LjUxNSA1IDYuNTY1IDUuMTk1IDYuNjY1QzUuMzg1IDYuNzY1IDUuNTUgNi45MDUgNS42OCA3LjA4NUM1LjgxIDcuMjY1IDUuOTEgNy40OCA1Ljk4IDcuNzM1QzYuMDUgNy45OSA2LjA4NSA4LjI3IDYuMDg1IDguNThDNi4wODUgOC45MDUgNi4wNDUgOS4yIDUuOTY1IDkuNDY1QzUuODg1IDkuNzMgNS43NyA5Ljk1IDUuNjMgMTAuMTM1QzUuNDg1IDEwLjMyIDUuMzIgMTAuNDY1IDUuMTI1IDEwLjU2NUM0LjkzIDEwLjY2NSA0LjcyIDEwLjcxNSA0LjQ5NSAxMC43MTVDNC40IDEwLjcxNSA0LjMgMTAuNzEgNC4xOTUgMTAuNzA1QzQuMDkgMTAuNjk1IDMuOTg1IDEwLjY3NSAzLjg3NSAxMC42NEMzLjc2NSAxMC42MDUgMy42NSAxMC41NTUgMy41MzUgMTAuNDlDMy40MiAxMC40MjUgMy4zIDEwLjMzNSAzLjE3NSAxMC4yMlYxMi4wODVIMi43NjVWNi42MjVIMi43NlpNNy41NzUgMTcuMDJINy4yVjE0LjY0NUM3LjIgMTQuMjk1IDcuMTQ1IDE0LjA0NSA3LjA0IDEzLjg5NUM2LjkzIDEzLjc0IDYuNzQgMTMuNjY1IDYuNDcgMTMuNjY1QzYuMjcgMTMuNjY1IDYuMDc1IDEzLjczIDUuODg1IDEzLjg1QzUuNjk1IDEzLjk3NSA1LjUxIDE0LjE1IDUuMzM1IDE0LjM3NVYxNy4wMjVINC45NlYxNC42NUM0Ljk2IDE0LjQ4IDQuOTUgMTQuMzMgNC45MjUgMTQuMjA1QzQuOSAxNC4wOCA0Ljg2IDEzLjk4IDQuODA1IDEzLjlDNC43NSAxMy44MiA0LjY3NSAxMy43NjUgNC41OCAxMy43MjVDNC40OSAxMy42OSA0LjM3NSAxMy42NyA0LjI0IDEzLjY3QzQuMDQ1IDEzLjY3IDMuODU1IDEzLjczNSAzLjY3NSAxMy44NTVDMy40OTUgMTMuOTggMy4zMTUgMTQuMTU1IDMuMTM1IDE0LjM4VjE3LjAzSDIuNzZWMTMuMzlIMy4xMzVWMTMuOTNDMy4yNiAxMy43OSAzLjM4IDEzLjY3NSAzLjQ5IDEzLjU5NUMzLjYgMTMuNTEgMy43MDUgMTMuNDUgMy44MDUgMTMuNDA1QzMuOTA1IDEzLjM2IDQgMTMuMzMgNC4wODUgMTMuMzJDNC4xNzUgMTMuMzA1IDQuMjYgMTMuMyA0LjM0IDEzLjNDNC41NzUgMTMuMyA0Ljc3NSAxMy4zNTUgNC45NCAxMy40NjVDNS4xMDUgMTMuNTc1IDUuMjI1IDEzLjc0NSA1LjMgMTMuOTY1QzUuMzk1IDEzLjgzNSA1LjQ5NSAxMy43MjUgNS42IDEzLjY0QzUuNzA1IDEzLjU1NSA1LjgxIDEzLjQ4NSA1LjkyIDEzLjQzNUM2LjAyNSAxMy4zODUgNi4xMzUgMTMuMzUgNi4yNDUgMTMuMzNDNi4zNTUgMTMuMzEgNi40NiAxMy4zIDYuNTY1IDEzLjNDNy4yNCAxMy4zIDcuNTc1IDEzLjc0IDcuNTc1IDE0LjYyNVYxNy4wMlpNMTQuOCAxNy4wMkgxNC4zM0wxMy4zOTUgMTMuOTdMMTIuNSAxNy4wMkgxMi4wM0wxMSAxMy40NjVMOS43MDUgMTcuMDg1QzkuNjI1IDE3LjMwNSA5LjU0IDE3LjQ5NSA5LjQ2IDE3LjY2QzkuMzc1IDE3LjgyNSA5LjI4NSAxNy45NjUgOS4xOSAxOC4wOEM5LjA5NSAxOC4xOTUgOC45ODUgMTguMjc1IDguODcgMTguMzM1QzguNzU1IDE4LjM5IDguNjIgMTguNDIgOC40OCAxOC40MkM4LjQzIDE4LjQyIDguMzggMTguNDIgOC4zMzUgMTguNDE1QzguMjkgMTguNDEgOC4yNCAxOC40MDUgOC4xOTUgMTguNFYxNy45OTVDOC4yMiAxOCA4LjI0NSAxOCA4LjI3NSAxOEg4LjM2NUM4LjU4IDE4IDguNzY1IDE3LjkyNSA4LjkyIDE3Ljc3NUM5LjA3NSAxNy42MjUgOS4yMSAxNy4zODUgOS4zMjUgMTcuMDVMNy45NCAxMy4zOEg4LjM1NUw5LjU0NSAxNi41NTVMMTAuNjM1IDEzLjM4SDExLjA0NUgxMS40MTVMMTIuMjg1IDE2LjQ1NUwxMy4xOCAxMy4zOEgxMy42NUwxNC41ODUgMTYuNDU1TDE1LjQyNSAxMy4zOEgxNS44NDVMMTQuOCAxNy4wMlpNMTguODg1IDE3LjAySDE4LjUxVjE2LjU1QzE4LjM4IDE2LjY2IDE4LjI1NSAxNi43NTUgMTguMTM1IDE2LjgzQzE4LjAxNSAxNi45MDUgMTcuODk1IDE2Ljk2IDE3Ljc3NSAxNy4wMDVDMTcuNjYgMTcuMDUgMTcuNTQgMTcuMDc1IDE3LjQyNSAxNy4wOUMxNy4zMSAxNy4xMDUgMTcuMTkgMTcuMTE1IDE3LjA3NSAxNy4xMTVDMTYuOTE1IDE3LjExNSAxNi43NjUgMTcuMDkgMTYuNjMgMTcuMDQ1QzE2LjQ5NSAxNyAxNi4zNzUgMTYuOTMgMTYuMjc1IDE2Ljg0QzE2LjE3NSAxNi43NSAxNi4wOTUgMTYuNjQ1IDE2LjAzNSAxNi41MTVDMTUuOTggMTYuMzkgMTUuOTUgMTYuMjUgMTUuOTUgMTYuMDk1QzE1Ljk1IDE1LjY4IDE2LjEzIDE1LjM1NSAxNi40ODUgMTUuMTI1QzE2Ljg0IDE0Ljg5NSAxNy4zNzUgMTQuNzc1IDE4LjA4NSAxNC43NzVIMTguNTE1QzE4LjUxNSAxNC42MTUgMTguNTA1IDE0LjQ3IDE4LjQ4NSAxNC4zMzVDMTguNDY1IDE0LjIgMTguNDI1IDE0LjA4NSAxOC4zNTUgMTMuOTg1QzE4LjI4NSAxMy44ODUgMTguMTg1IDEzLjgxIDE4LjA1IDEzLjc1NUMxNy45MTUgMTMuNyAxNy43MzUgMTMuNjcgMTcuNSAxMy42N0MxNy4xNiAxMy42NyAxNi45MDUgMTMuNzI1IDE2LjczNSAxMy44M0MxNi41NjUgMTMuOTM1IDE2LjQ2NSAxNC4xIDE2LjQzIDE0LjMxNUgxNi4wNkMxNi4xIDEzLjk3IDE2LjIzNSAxMy43MTUgMTYuNDY1IDEzLjU0NUMxNi42OTUgMTMuMzggMTcuMDQgMTMuMjk1IDE3LjQ5NSAxMy4yOTVDMTcuNzUgMTMuMjk1IDE3Ljk2NSAxMy4zMjUgMTguMTQgMTMuMzlDMTguMzE1IDEzLjQ1IDE4LjQ2IDEzLjU0IDE4LjU3IDEzLjY2QzE4LjY4IDEzLjc4IDE4Ljc2NSAxMy45MiAxOC44MTUgMTQuMDlDMTguODY1IDE0LjI1NSAxOC44OSAxNC40NDUgMTguODkgMTQuNjU1VjE3LjAySDE4Ljg4NVpNMjAuMDcgMTcuMDJIMTkuNjk1VjExLjg4SDIwLjA3VjE3LjAyWk0yMS4yNCAxNy4wMkgyMC44NjVWMTEuODhIMjEuMjRWMTcuMDJaTTIxLjI0IDYuOTQ1QzIxLjIgNi45NCAyMS4xNiA2LjkzNSAyMS4xMTUgNi45MzVIMjAuOTY1QzIwLjg1IDYuOTM1IDIwLjczNSA2Ljk2IDIwLjYyNSA3LjAwNUMyMC41MTUgNy4wNTUgMjAuNDEgNy4xMTUgMjAuMzEgNy4xOTVDMjAuMjEgNy4yNyAyMC4xMiA3LjM2IDIwLjAzIDcuNDZDMTkuOTQ1IDcuNTU1IDE5Ljg3IDcuNjYgMTkuODEgNy43NlYxMC42MkgxOS40VjYuNjNIMTkuODFWNy4xOEMxOS45MjUgNy4wNCAyMC4wNDUgNi45MyAyMC4xNiA2Ljg0NUMyMC4yNzUgNi43NiAyMC4zODUgNi42OSAyMC40OTUgNi42NDVDMjAuNjA1IDYuNTk1IDIwLjcxIDYuNTY1IDIwLjgwNSA2LjU1QzIwLjkwNSA2LjUzNSAyMC45OTUgNi41MjUgMjEuMDggNi41MjVDMjEuMTA1IDYuNTI1IDIxLjEzNSA2LjUyNSAyMS4xNTUgNi41MjVDMjEuMTggNi41MjUgMjEuMjA1IDYuNTMgMjEuMjQgNi41MzVWNi45NDVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
});

const PosterMyWallAuthInput: React.SFC<PosterMyWallAuthInputProps> = ({
  classes,
  ...props
}) => (
  <OAuthInput
    {...props}
    theme={outerTheme =>
      createTheme({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: {
            main: '#3FBCE7',
            dark: '#3296B9',
            contrastText: '#ffffff',
          },
        },
        button: {
          ...outerTheme.button,
          background: '#99D8EF',
          foregroundMuted: '#ffffff',
        },
      })
    }
    label="connect to PosterMyWall"
    icon={<div className={classes.icon} />}
  />
);

export default withStyles(styles)(PosterMyWallAuthInput);