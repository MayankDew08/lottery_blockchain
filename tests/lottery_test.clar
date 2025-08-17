(use-trait 'stx-transfer? .stx-transfer)

(define-map balances principal uint)

(define-public (test-buy-ticket)
    (let ((user 'SP2C2KQ0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q0Q))
        (as-contract (stx-transfer? u1000000 user tx-sender))
        (as-contract (buy-ticket))
        (asserts! (contains? (var-get tickets) user) (err u200))
    )
)

(define-public (test-draw-winner)
    (let ((owner tx-sender))
        (as-contract (draw-winner))
        (asserts! (is-some (var-get winner)) (err u201))
    )
)

(define-public (test-get-tickets)
    (asserts! (is-list (get-tickets)) (err u202))
)

(define-public (test-get-winner)
    (draw-winner)
    (asserts! (is-some (get-winner)) (err u203))
)
