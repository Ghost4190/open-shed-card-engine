/**
 * Session 1 teaching exercise, using invented data only.
 * This suggests a card ID; it does not decide the rules or play a move.
 */
export function recommendCard(view) {
  if (view.legalActions.playableCardIds.length === 0) return null;

  const permittedIds = new Set(view.legalActions.playableCardIds);
  return view.hand.find((card) => permittedIds.has(card.id))?.id ?? null;
}
