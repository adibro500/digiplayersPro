/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CssToken, CssTokenType } from './css_lexer';
export var BlockType;
(function (BlockType) {
    BlockType[BlockType["Import"] = 0] = "Import";
    BlockType[BlockType["Charset"] = 1] = "Charset";
    BlockType[BlockType["Namespace"] = 2] = "Namespace";
    BlockType[BlockType["Supports"] = 3] = "Supports";
    BlockType[BlockType["Keyframes"] = 4] = "Keyframes";
    BlockType[BlockType["MediaQuery"] = 5] = "MediaQuery";
    BlockType[BlockType["Selector"] = 6] = "Selector";
    BlockType[BlockType["FontFace"] = 7] = "FontFace";
    BlockType[BlockType["Page"] = 8] = "Page";
    BlockType[BlockType["Document"] = 9] = "Document";
    BlockType[BlockType["Viewport"] = 10] = "Viewport";
    BlockType[BlockType["Unsupported"] = 11] = "Unsupported";
})(BlockType || (BlockType = {}));
export class CssAst {
    constructor(location) {
        this.location = location;
    }
    get start() { return this.location.start; }
    get end() { return this.location.end; }
}
export class CssStyleValueAst extends CssAst {
    constructor(location, tokens, strValue) {
        super(location);
        this.tokens = tokens;
        this.strValue = strValue;
    }
    visit(visitor, context) { return visitor.visitCssValue(this); }
}
export class CssRuleAst extends CssAst {
    constructor(location) { super(location); }
}
export class CssBlockRuleAst extends CssRuleAst {
    constructor(location, type, block, name = null) {
        super(location);
        this.location = location;
        this.type = type;
        this.block = block;
        this.name = name;
    }
    visit(visitor, context) {
        return visitor.visitCssBlock(this.block, context);
    }
}
export class CssKeyframeRuleAst extends CssBlockRuleAst {
    constructor(location, name, block) {
        super(location, BlockType.Keyframes, block, name);
    }
    visit(visitor, context) {
        return visitor.visitCssKeyframeRule(this, context);
    }
}
export class CssKeyframeDefinitionAst extends CssBlockRuleAst {
    constructor(location, steps, block) {
        super(location, BlockType.Keyframes, block, mergeTokens(steps, ','));
        this.steps = steps;
    }
    visit(visitor, context) {
        return visitor.visitCssKeyframeDefinition(this, context);
    }
}
export class CssBlockDefinitionRuleAst extends CssBlockRuleAst {
    constructor(location, strValue, type, query, block) {
        super(location, type, block);
        this.strValue = strValue;
        this.query = query;
        const firstCssToken = query.tokens[0];
        this.name = new CssToken(firstCssToken.index, firstCssToken.column, firstCssToken.line, CssTokenType.Identifier, this.strValue);
    }
    visit(visitor, context) {
        return visitor.visitCssBlock(this.block, context);
    }
}
export class CssMediaQueryRuleAst extends CssBlockDefinitionRuleAst {
    constructor(location, strValue, query, block) {
        super(location, strValue, BlockType.MediaQuery, query, block);
    }
    visit(visitor, context) {
        return visitor.visitCssMediaQueryRule(this, context);
    }
}
export class CssAtRulePredicateAst extends CssAst {
    constructor(location, strValue, tokens) {
        super(location);
        this.strValue = strValue;
        this.tokens = tokens;
    }
    visit(visitor, context) {
        return visitor.visitCssAtRulePredicate(this, context);
    }
}
export class CssInlineRuleAst extends CssRuleAst {
    constructor(location, type, value) {
        super(location);
        this.type = type;
        this.value = value;
    }
    visit(visitor, context) {
        return visitor.visitCssInlineRule(this, context);
    }
}
export class CssSelectorRuleAst extends CssBlockRuleAst {
    constructor(location, selectors, block) {
        super(location, BlockType.Selector, block);
        this.selectors = selectors;
        this.strValue = selectors.map(selector => selector.strValue).join(',');
    }
    visit(visitor, context) {
        return visitor.visitCssSelectorRule(this, context);
    }
}
export class CssDefinitionAst extends CssAst {
    constructor(location, property, value) {
        super(location);
        this.property = property;
        this.value = value;
    }
    visit(visitor, context) {
        return visitor.visitCssDefinition(this, context);
    }
}
export class CssSelectorPartAst extends CssAst {
    constructor(location) { super(location); }
}
export class CssSelectorAst extends CssSelectorPartAst {
    constructor(location, selectorParts) {
        super(location);
        this.selectorParts = selectorParts;
        this.strValue = selectorParts.map(part => part.strValue).join('');
    }
    visit(visitor, context) {
        return visitor.visitCssSelector(this, context);
    }
}
export class CssSimpleSelectorAst extends CssSelectorPartAst {
    constructor(location, tokens, strValue, pseudoSelectors, operator) {
        super(location);
        this.tokens = tokens;
        this.strValue = strValue;
        this.pseudoSelectors = pseudoSelectors;
        this.operator = operator;
    }
    visit(visitor, context) {
        return visitor.visitCssSimpleSelector(this, context);
    }
}
export class CssPseudoSelectorAst extends CssSelectorPartAst {
    constructor(location, strValue, name, tokens, innerSelectors) {
        super(location);
        this.strValue = strValue;
        this.name = name;
        this.tokens = tokens;
        this.innerSelectors = innerSelectors;
    }
    visit(visitor, context) {
        return visitor.visitCssPseudoSelector(this, context);
    }
}
export class CssBlockAst extends CssAst {
    constructor(location, entries) {
        super(location);
        this.entries = entries;
    }
    visit(visitor, context) { return visitor.visitCssBlock(this, context); }
}
/*
 a style block is different from a standard block because it contains
 css prop:value definitions. A regular block can contain a list of Ast entries.
 */
export class CssStylesBlockAst extends CssBlockAst {
    constructor(location, definitions) {
        super(location, definitions);
        this.definitions = definitions;
    }
    visit(visitor, context) {
        return visitor.visitCssStylesBlock(this, context);
    }
}
export class CssStyleSheetAst extends CssAst {
    constructor(location, rules) {
        super(location);
        this.rules = rules;
    }
    visit(visitor, context) {
        return visitor.visitCssStyleSheet(this, context);
    }
}
export class CssUnknownRuleAst extends CssRuleAst {
    constructor(location, ruleName, tokens) {
        super(location);
        this.ruleName = ruleName;
        this.tokens = tokens;
    }
    visit(visitor, context) {
        return visitor.visitCssUnknownRule(this, context);
    }
}
export class CssUnknownTokenListAst extends CssRuleAst {
    constructor(location, name, tokens) {
        super(location);
        this.name = name;
        this.tokens = tokens;
    }
    visit(visitor, context) {
        return visitor.visitCssUnknownTokenList(this, context);
    }
}
export function mergeTokens(tokens, separator = '') {
    const mainToken = tokens[0];
    let str = mainToken.strValue;
    for (let i = 1; i < tokens.length; i++) {
        str += separator + tokens[i].strValue;
    }
    return new CssToken(mainToken.index, mainToken.column, mainToken.line, mainToken.type, str);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2FzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jc3NfcGFyc2VyL2Nzc19hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsT0FBTyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFbkQsTUFBTSxDQUFOLElBQVksU0FhWDtBQWJELFdBQVksU0FBUztJQUNuQiw2Q0FBTSxDQUFBO0lBQ04sK0NBQU8sQ0FBQTtJQUNQLG1EQUFTLENBQUE7SUFDVCxpREFBUSxDQUFBO0lBQ1IsbURBQVMsQ0FBQTtJQUNULHFEQUFVLENBQUE7SUFDVixpREFBUSxDQUFBO0lBQ1IsaURBQVEsQ0FBQTtJQUNSLHlDQUFJLENBQUE7SUFDSixpREFBUSxDQUFBO0lBQ1Isa0RBQVEsQ0FBQTtJQUNSLHdEQUFXLENBQUE7QUFDYixDQUFDLEVBYlcsU0FBUyxLQUFULFNBQVMsUUFhcEI7QUFxQkQsTUFBTTtJQUNKLFlBQW1CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQUcsQ0FBQztJQUNoRCxJQUFJLEtBQUssS0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJLEdBQUcsS0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUV2RDtBQUVELE1BQU0sdUJBQXdCLFNBQVEsTUFBTTtJQUMxQyxZQUFZLFFBQXlCLEVBQVMsTUFBa0IsRUFBUyxRQUFnQjtRQUN2RixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFENEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7SUFFekYsQ0FBQztJQUNELEtBQUssQ0FBQyxPQUFzQixFQUFFLE9BQWEsSUFBUyxNQUFN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d0JBQXdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQUVELE1BQU0sc0JBQXNCLE1BQWtCLEVBQUUsWUFBb0IsRUFBRTtJQUNwRSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN2QyxHQUFHLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGFyc2VMb2NhdGlvbiwgUGFyc2VTb3VyY2VTcGFufSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuaW1wb3J0IHtDc3NUb2tlbiwgQ3NzVG9rZW5UeXBlfSBmcm9tICcuL2Nzc19sZXhlcic7XG5cbmV4cG9ydCBlbnVtIEJsb2NrVHlwZSB7XG4gIEltcG9ydCxcbiAgQ2hhcnNldCxcbiAgTmFtZXNwYWNlLFxuICBTdXBwb3J0cyxcbiAgS2V5ZnJhbWVzLFxuICBNZWRpYVF1ZXJ5LFxuICBTZWxlY3RvcixcbiAgRm9udEZhY2UsXG4gIFBhZ2UsXG4gIERvY3VtZW50LFxuICBWaWV3cG9ydCxcbiAgVW5zdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDc3NBc3RWaXNpdG9yIHtcbiAgdmlzaXRDc3NWYWx1ZShhc3Q6IENzc1N0eWxlVmFsdWVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzSW5saW5lUnVsZShhc3Q6IENzc0lubGluZVJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzQXRSdWxlUHJlZGljYXRlKGFzdDogQ3NzQXRSdWxlUHJlZGljYXRlQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc0tleWZyYW1lUnVsZShhc3Q6IENzc0tleWZyYW1lUnVsZUFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NLZXlmcmFtZURlZmluaXRpb24oYXN0OiBDc3NLZXlmcmFtZURlZmluaXRpb25Bc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzTWVkaWFRdWVyeVJ1bGUoYXN0OiBDc3NNZWRpYVF1ZXJ5UnVsZUFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NTZWxlY3RvclJ1bGUoYXN0OiBDc3NTZWxlY3RvclJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzU2VsZWN0b3IoYXN0OiBDc3NTZWxlY3RvckFzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NTaW1wbGVTZWxlY3Rvcihhc3Q6IENzc1NpbXBsZVNlbGVjdG9yQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1BzZXVkb1NlbGVjdG9yKGFzdDogQ3NzUHNldWRvU2VsZWN0b3JBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzRGVmaW5pdGlvbihhc3Q6IENzc0RlZmluaXRpb25Bc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzQmxvY2soYXN0OiBDc3NCbG9ja0FzdCwgY29udGV4dD86IGFueSk6IGFueTtcbiAgdmlzaXRDc3NTdHlsZXNCbG9jayhhc3Q6IENzc1N0eWxlc0Jsb2NrQXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1N0eWxlU2hlZXQoYXN0OiBDc3NTdHlsZVNoZWV0QXN0LCBjb250ZXh0PzogYW55KTogYW55O1xuICB2aXNpdENzc1Vua25vd25SdWxlKGFzdDogQ3NzVW5rbm93blJ1bGVBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q3NzVW5rbm93blRva2VuTGlzdChhc3Q6IENzc1Vua25vd25Ub2tlbkxpc3RBc3QsIGNvbnRleHQ/OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9jYXRpb246IFBhcnNlU291cmNlU3Bhbikge31cbiAgZ2V0IHN0YXJ0KCk6IFBhcnNlTG9jYXRpb24geyByZXR1cm4gdGhpcy5sb2NhdGlvbi5zdGFydDsgfVxuICBnZXQgZW5kKCk6IFBhcnNlTG9jYXRpb24geyByZXR1cm4gdGhpcy5sb2NhdGlvbi5lbmQ7IH1cbiAgYWJzdHJhY3QgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIENzc1N0eWxlVmFsdWVBc3QgZXh0ZW5kcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgdG9rZW5zOiBDc3NUb2tlbltdLCBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHsgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NWYWx1ZSh0aGlzKTsgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3NzUnVsZUFzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4pIHsgc3VwZXIobG9jYXRpb24pOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NCbG9ja1J1bGVBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHR5cGU6IEJsb2NrVHlwZSwgcHVibGljIGJsb2NrOiBDc3NCbG9ja0FzdCxcbiAgICAgIHB1YmxpYyBuYW1lOiBDc3NUb2tlbnxudWxsID0gbnVsbCkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0Jsb2NrKHRoaXMuYmxvY2ssIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NLZXlmcmFtZVJ1bGVBc3QgZXh0ZW5kcyBDc3NCbG9ja1J1bGVBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBuYW1lOiBDc3NUb2tlbiwgYmxvY2s6IENzc0Jsb2NrQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24sIEJsb2NrVHlwZS5LZXlmcmFtZXMsIGJsb2NrLCBuYW1lKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0tleWZyYW1lUnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0IGV4dGVuZHMgQ3NzQmxvY2tSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0ZXBzOiBDc3NUb2tlbltdLCBibG9jazogQ3NzQmxvY2tBc3QpIHtcbiAgICBzdXBlcihsb2NhdGlvbiwgQmxvY2tUeXBlLktleWZyYW1lcywgYmxvY2ssIG1lcmdlVG9rZW5zKHN0ZXBzLCAnLCcpKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0tleWZyYW1lRGVmaW5pdGlvbih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCBleHRlbmRzIENzc0Jsb2NrUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsIHR5cGU6IEJsb2NrVHlwZSxcbiAgICAgIHB1YmxpYyBxdWVyeTogQ3NzQXRSdWxlUHJlZGljYXRlQXN0LCBibG9jazogQ3NzQmxvY2tBc3QpIHtcbiAgICBzdXBlcihsb2NhdGlvbiwgdHlwZSwgYmxvY2spO1xuICAgIGNvbnN0IGZpcnN0Q3NzVG9rZW46IENzc1Rva2VuID0gcXVlcnkudG9rZW5zWzBdO1xuICAgIHRoaXMubmFtZSA9IG5ldyBDc3NUb2tlbihcbiAgICAgICAgZmlyc3RDc3NUb2tlbi5pbmRleCwgZmlyc3RDc3NUb2tlbi5jb2x1bW4sIGZpcnN0Q3NzVG9rZW4ubGluZSwgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIsXG4gICAgICAgIHRoaXMuc3RyVmFsdWUpO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzQmxvY2sodGhpcy5ibG9jaywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc01lZGlhUXVlcnlSdWxlQXN0IGV4dGVuZHMgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3Bhbiwgc3RyVmFsdWU6IHN0cmluZywgcXVlcnk6IENzc0F0UnVsZVByZWRpY2F0ZUFzdCxcbiAgICAgIGJsb2NrOiBDc3NCbG9ja0FzdCkge1xuICAgIHN1cGVyKGxvY2F0aW9uLCBzdHJWYWx1ZSwgQmxvY2tUeXBlLk1lZGlhUXVlcnksIHF1ZXJ5LCBibG9jayk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NNZWRpYVF1ZXJ5UnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzQXRSdWxlUHJlZGljYXRlQXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NBdFJ1bGVQcmVkaWNhdGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0lubGluZVJ1bGVBc3QgZXh0ZW5kcyBDc3NSdWxlQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHR5cGU6IEJsb2NrVHlwZSwgcHVibGljIHZhbHVlOiBDc3NTdHlsZVZhbHVlQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzSW5saW5lUnVsZSh0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzU2VsZWN0b3JSdWxlQXN0IGV4dGVuZHMgQ3NzQmxvY2tSdWxlQXN0IHtcbiAgcHVibGljIHN0clZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHNlbGVjdG9yczogQ3NzU2VsZWN0b3JBc3RbXSwgYmxvY2s6IENzc0Jsb2NrQXN0KSB7XG4gICAgc3VwZXIobG9jYXRpb24sIEJsb2NrVHlwZS5TZWxlY3RvciwgYmxvY2spO1xuICAgIHRoaXMuc3RyVmFsdWUgPSBzZWxlY3RvcnMubWFwKHNlbGVjdG9yID0+IHNlbGVjdG9yLnN0clZhbHVlKS5qb2luKCcsJyk7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NTZWxlY3RvclJ1bGUodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0RlZmluaXRpb25Bc3QgZXh0ZW5kcyBDc3NBc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBwcm9wZXJ0eTogQ3NzVG9rZW4sIHB1YmxpYyB2YWx1ZTogQ3NzU3R5bGVWYWx1ZUFzdCkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc0RlZmluaXRpb24odGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENzc1NlbGVjdG9yUGFydEFzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4pIHsgc3VwZXIobG9jYXRpb24pOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NTZWxlY3RvckFzdCBleHRlbmRzIENzc1NlbGVjdG9yUGFydEFzdCB7XG4gIHB1YmxpYyBzdHJWYWx1ZTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgc2VsZWN0b3JQYXJ0czogQ3NzU2ltcGxlU2VsZWN0b3JBc3RbXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgICB0aGlzLnN0clZhbHVlID0gc2VsZWN0b3JQYXJ0cy5tYXAocGFydCA9PiBwYXJ0LnN0clZhbHVlKS5qb2luKCcnKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1NlbGVjdG9yKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NTaW1wbGVTZWxlY3RvckFzdCBleHRlbmRzIENzc1NlbGVjdG9yUGFydEFzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgbG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHRva2VuczogQ3NzVG9rZW5bXSwgcHVibGljIHN0clZhbHVlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgcHNldWRvU2VsZWN0b3JzOiBDc3NQc2V1ZG9TZWxlY3RvckFzdFtdLCBwdWJsaWMgb3BlcmF0b3I6IENzc1Rva2VuKSB7XG4gICAgc3VwZXIobG9jYXRpb24pO1xuICB9XG4gIHZpc2l0KHZpc2l0b3I6IENzc0FzdFZpc2l0b3IsIGNvbnRleHQ/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzU2ltcGxlU2VsZWN0b3IodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc1BzZXVkb1NlbGVjdG9yQXN0IGV4dGVuZHMgQ3NzU2VsZWN0b3JQYXJ0QXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZywgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10sIHB1YmxpYyBpbm5lclNlbGVjdG9yczogQ3NzU2VsZWN0b3JBc3RbXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1BzZXVkb1NlbGVjdG9yKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NCbG9ja0FzdCBleHRlbmRzIENzc0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBlbnRyaWVzOiBDc3NBc3RbXSkgeyBzdXBlcihsb2NhdGlvbik7IH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7IHJldHVybiB2aXNpdG9yLnZpc2l0Q3NzQmxvY2sodGhpcywgY29udGV4dCk7IH1cbn1cblxuLypcbiBhIHN0eWxlIGJsb2NrIGlzIGRpZmZlcmVudCBmcm9tIGEgc3RhbmRhcmQgYmxvY2sgYmVjYXVzZSBpdCBjb250YWluc1xuIGNzcyBwcm9wOnZhbHVlIGRlZmluaXRpb25zLiBBIHJlZ3VsYXIgYmxvY2sgY2FuIGNvbnRhaW4gYSBsaXN0IG9mIEFzdCBlbnRyaWVzLlxuICovXG5leHBvcnQgY2xhc3MgQ3NzU3R5bGVzQmxvY2tBc3QgZXh0ZW5kcyBDc3NCbG9ja0FzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBkZWZpbml0aW9uczogQ3NzRGVmaW5pdGlvbkFzdFtdKSB7XG4gICAgc3VwZXIobG9jYXRpb24sIGRlZmluaXRpb25zKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1N0eWxlc0Jsb2NrKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NTdHlsZVNoZWV0QXN0IGV4dGVuZHMgQ3NzQXN0IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb246IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHJ1bGVzOiBDc3NBc3RbXSkgeyBzdXBlcihsb2NhdGlvbik7IH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NTdHlsZVNoZWV0KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NVbmtub3duUnVsZUFzdCBleHRlbmRzIENzc1J1bGVBc3Qge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgcnVsZU5hbWU6IHN0cmluZywgcHVibGljIHRva2VuczogQ3NzVG9rZW5bXSkge1xuICAgIHN1cGVyKGxvY2F0aW9uKTtcbiAgfVxuICB2aXNpdCh2aXNpdG9yOiBDc3NBc3RWaXNpdG9yLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdENzc1Vua25vd25SdWxlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NVbmtub3duVG9rZW5MaXN0QXN0IGV4dGVuZHMgQ3NzUnVsZUFzdCB7XG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0b2tlbnM6IENzc1Rva2VuW10pIHtcbiAgICBzdXBlcihsb2NhdGlvbik7XG4gIH1cbiAgdmlzaXQodmlzaXRvcjogQ3NzQXN0VmlzaXRvciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRDc3NVbmtub3duVG9rZW5MaXN0KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRva2Vucyh0b2tlbnM6IENzc1Rva2VuW10sIHNlcGFyYXRvcjogc3RyaW5nID0gJycpOiBDc3NUb2tlbiB7XG4gIGNvbnN0IG1haW5Ub2tlbiA9IHRva2Vuc1swXTtcbiAgbGV0IHN0ciA9IG1haW5Ub2tlbi5zdHJWYWx1ZTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzdHIgKz0gc2VwYXJhdG9yICsgdG9rZW5zW2ldLnN0clZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBDc3NUb2tlbihtYWluVG9rZW4uaW5kZXgsIG1haW5Ub2tlbi5jb2x1bW4sIG1haW5Ub2tlbi5saW5lLCBtYWluVG9rZW4udHlwZSwgc3RyKTtcbn1cbiJdfQ==