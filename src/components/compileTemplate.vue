<template>
    <div>
        <div v-html="template"></div>
    </div>
</template>

<script>
    export default {
        name: 'compileTemplate',
        data() {
            return {
                arr: [1, 2, 3, 4],
                template: ''
            }
        },
        created() {
            this.template = `
            <ul>
                <% for(let i = 0; i<${this.arr.length}; i++) { %>
                    <li><%= arr[i] %></li>
                <% } %>
            </ul>
            `;

            let evalExpr = /<%=(.+?)%>/g;
            let expr = /<%([\s\S]+?)%>/g;
            this.template = this.template
                .replace(evalExpr, '`); \n echo($1); \n echo(`')
                .replace(expr, '`); \n $1 \n echo(`');
            this.template = 'echo(`' + this.template + '`);';

            // let script = function (data) {
            //     let output = '';
            //
            //     function echo(html) {
            //         output += html;
            //     }
            //
            //     ${data}
            //     return output;
            // };
            //
            // this.template = script(this.template);
        },
        methods: {
            compile (template) {

            }
        }
    }
</script>

<style scoped>

</style>
