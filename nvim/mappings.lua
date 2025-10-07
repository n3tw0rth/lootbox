local map = vim.keymap.set

-- faster way to go to normal mode from insert mode
map("i", "jk", "<ESC>")

-- some keymaps to change the variable name current case
map({ "n", "v" }, "<leader>cc", [[:s/\v_(\w)/\U\1/g<CR>:s/\v(^\l)/\L\1/<CR>]], { desc = "snake_case to camelCase" })
map({ "n", "v" }, "<leader>ck", [[:s/\v-([a-z])/_\1/g<CR>]], { desc = "kebab-case to snake_case" })

-- Live grep on all files including hidden files
map(
	"n",
	"<leader>fw",
	":lua require('telescope.builtin').live_grep({ additional_args = function() return { '--hidden' } end })<cr>",
	{ silent = true, desc = "Find in  All Files" }
)

-- Quick way to send relative path and the line number to someone
map("n", "<Leader>l", ":let @+ = expand('%') . ':' . line('.')<cr>", { desc = "Copy file name and the line number" })
